import React,{useState} from 'react'
import { StyleSheet, Text, View,Image, TextInput, Button } from 'react-native'
import * as yup from 'yup'
import { Formik } from 'formik'
import { Divider } from 'react-native-elements'
import validUrl from 'valid-url'


const PLACEHOLDER_IMG = 'https://media.istockphoto.com/vectors/thumbnail-image-vector-graphic-vector-id1147544807?k=20&m=1147544807&s=612x612&w=0&h=pBhz1dkwsCMq37Udtp9sfxbjaMl27JUapoyYpQm0anc='


const uploadPostSchema = yup.object().shape({
    imgUrl : yup.string().url().required('A URL is required'),
    caption : yup.string().max(2200,'Caption has reached the character')
})

const FormikPostUploader = ({navigation}) => {
       
    const [tumbnaillUrl , settumbnailUrl ] = useState(PLACEHOLDER_IMG)

    return (
      <Formik 
         initialValues={{caption:'', imgUrl: ''}}
         onSubmit={(values) => {
                console.log(values)
                alert('Your Post Succesfully Added')
                navigation.goBack()       
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
                 onChangeText={handleChange('imgUrl')}
                 onBlur={handleBlur('imageUrl')}
                 value={values.imgUrl}
                 />
                 {errors.imgUrl &&(
                     <Text style={{fontSize:15 , color:'red'}} > 
                         {errors.imgUrl}
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
