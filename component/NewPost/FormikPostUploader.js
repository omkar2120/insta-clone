import React,{useState , useEffect} from 'react'
import { StyleSheet, Text, View,Image, TextInput, Button } from 'react-native'
import * as yup from 'yup'
import { Formik } from 'formik'
import { Divider } from 'react-native-elements'
import validUrl from 'valid-url'
import {  db , firebase } from '../../firebase'



const PLACEHOLDER_IMG = 'https://media.istockphoto.com/vectors/thumbnail-image-vector-graphic-vector-id1147544807?k=20&m=1147544807&s=612x612&w=0&h=pBhz1dkwsCMq37Udtp9sfxbjaMl27JUapoyYpQm0anc='


const uploadPostSchema = yup.object().shape({
    imageurl : yup.string().url().required('A URL is required'),   // imgUrl changed imageurl 
    caption : yup.string().max(2200,'Caption has reached the character')
})

const FormikPostUploader = ({navigation}) => {
       
    const [tumbnaillUrl , settumbnailUrl ] = useState(PLACEHOLDER_IMG)
    const [currentLoggedInUser , setCurrentLoggedInUser] = useState(null)

    const getUsername = () => {       // when user get loggin then it show a profile pic and new post 
      const user = firebase.auth().currentUser
      const unsuscribe = db
      .collection('users')
      .where('owner_uid' , '==' , user.uid).limit(1).onSnapshot(
        snapshot => snapshot.docs.map(doc => {
          setCurrentLoggedInUser({
            username: doc.data().username,
            profilePicture: doc.data().profile_picture,
          })
        })
      )
      return unsuscribe
    }

    useEffect(() => {
        getUsername()
    },[])

const uploadPostToFirebase = (imageurl, caption) => {    // to add the post to  is  check user
     const unsubscribe = db.collection('users')
     .doc(firebase.auth().currentUser.email)     //it check and  validate email address 0
     .collection('posts')
     .add({                                     //here add post work and data will see a username  pp c
      imageurl : imageurl,
       user : currentLoggedInUser.username,     
       profile_picture : currentLoggedInUser.profilePicture,
       owner_uid : firebase.auth().currentUser.uid,        // is checked owener of a post
       caption: caption,
       createdAt : firebase.firestore.FieldValue.serverTimestamp(),   //this is for showing post upload time 
       likes : 0,
       likes_by_users: [],
       comments: [],

     })
     .then(() => navigation.goBack())

     return unsubscribe
}


    return (
      <Formik 
         initialValues={{caption:'' , imageurl:''}}
         onSubmit={(values) => {
           uploadPostToFirebase(values.imageurl , values.caption)
         }  

               
               }
         validationSchema={uploadPostSchema}
         validateOnMount={true}
       >
      {({ handleBlur, handleChange, handleSubmit, values, errors, isValid}) => (
          <>
            <View
               style={{ 
                     margin:20,
                     justifyContent: 'space-between',
                     flexDirection:'row'
                     }}>
                        <Image source={{ uri: validUrl.isUri(tumbnaillUrl) ? tumbnaillUrl : PLACEHOLDER_IMG}} 
                       style={{ width: 100, height: 100}}
               />
            <View style={{flex:1,marginLeft:10}}>
               <TextInput 
                 onChange={e => settumbnailUrl(e.nativeEvent)}
                 style={{color:'white',fontSize:20}}
                 placeholder='Write a caption...'
                 placeholderTextColor='grey'
                 multiline={true}
                 onChangeText={handleChange('caption')}
                 onBlur={handleBlur('caption')}
                 value={values.caption}

                 />
             </View>
</View>            

                <Divider  width={0.2}  orientation='vertical' />    
                <View>
               <TextInput 
                 onChange={e => settumbnailUrl(e.nativeEvent.text)}
                 style={{color:'white',fontSize:20}}
                 placeholder='Enter Image Url'
                 placeholderTextColor='grey'
                 onChangeText={handleChange('imageurl')}
                 onBlur={handleBlur('imageurl')}
                 value={values.imageurl}
                 />
                 {errors.imageurl &&(
                     <Text style={{fontSize:15 , color:'red'}} > 
                         {errors.imageurl}
                     </Text>
                 )}
                 <Button  onPress={handleSubmit} title="Share" disabled={!isValid} />
                 </View>
                 
          </>
      ) }
      </Formik>
    )
}

export default FormikPostUploader;
