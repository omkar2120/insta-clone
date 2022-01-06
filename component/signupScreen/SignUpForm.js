import React from 'react'
import { View, Text, TextInput,StyleSheet, Pressable, TouchableOpacity, Alert } from 'react-native'
import { Formik } from 'formik'
import  * as Yup from 'yup'
import { Validator } from 'email-validator'
import {firebase ,db} from '../../firebase'
import { ScrollView } from 'react-native-gesture-handler'
// import AsyncStorage from "@react-native-async-storage/async-storage"
const SignUpForm = ({navigation}) => {

    const SignUpFormSchema = Yup.object().shape({
        email: Yup.string().email().required('An email is required'),
        username: Yup.string().required().min(5,'A username required'),
        password: Yup.string() 
        .required()
        .min(5, 'Your password has to have at least 8 character')
   })

   const getRandomProfilePicture = async () => {
       const response = await fetch('http://randomuser.me/api')
       const data = await response.json()
       return data.results[0].picture.large
   }

   const onSignUp = async (email,username, password) => {
       try {
           const authuser = await firebase.auth().createUserWithEmailAndPassword(email,password)
           alert('Firebase user created succesfully go back and login')
           console.log('Firebase user created successfully')

            db.collection('users').add({
                owner_uid: authuser.user.uid,
                username:username,
                email: authuser.user.email,
                password:password,
                profile_picture: await getRandomProfilePicture(),
            })

       } catch(error){
           Alert.alert('Hello user...' , error.message)
       }
   } 

    return (
        <View style={styles.wrapper}>
        
        <Formik
          initialValues={{email: '' , password: '',username: ''}}
          onSubmit={(values) => {
              onSignUp(values.email,values.username,values.password)
          }}
          validationSchema ={SignUpFormSchema}
          validateOnMount={true}
        >
        {({handleChange,handleBlur,handleSubmit, values, isValid}) => (

        <>

          <View style= {[ styles.inputField,
          //    {
          //        borderColor: values.email.length < 1 || Validator.validate(values.email) 
          //        ? '#ccc'
          //        : 'red',
          //    },
          
          ]} 
          >
           <TextInput 
               placeholderTextColor='#444'
               placeholder="email"
               autoComplete='none'
               autoCapitalize='none'
               keyboardType='email-address'
               textContentType='emailAddress'
               autoFocus={true}
               onChangeText={handleChange('email')}
               onBlur={handleBlur('email')}
               value={values.email}
          />
          </View>
          <View style={[styles.inputField,
          
        ]}
        >
         <TextInput 
               placeholderTextColor='#444'
               placeholder="Username"
               autoComplete='none'
               autoCapitalize='none'
               keyboardType='username'
               textContentType='username'
               autoFocus={true}
               onChangeText={handleChange('username')}
               onBlur={handleBlur('username')}
               value={values.username}
          />

          
         </View>


          <View style={[styles.inputField,
          
          ]}
          >
           <TextInput 
               placeholderTextColor='#444'
               placeholder="Password"
               autoComplete='none'
               autoCapitalize='none'
               autoCorrect={false}
               secureTextEntry={true}
               textContentType='password'
               onChangeText={handleChange('password')}
               onBlur={handleBlur('password')}
               value={values.password}
               
           />
            
           </View>
           {/* <View style={{alignItems:'flex-end',marginBottom:30}}>
                <Text style={{color:'#6BB0F5',fontWeight:'300'}}>Forget Password</Text>
            </View> */}

     <Pressable 
          titleSize={20} 
          style={styles.button(isValid)}
          onPress={handleSubmit}
          disabled={!isValid}>

         <Text style={styles.buttonText}>SignUp</Text>

     </Pressable>

     <View style={styles.SignUpContainer}>
         <Text>Already have an account</Text>
         <TouchableOpacity onPress={() => navigation.goBack()} >
             <Text style={{color:'#6BB0F5'}}> LogIn</Text>
          
         </TouchableOpacity>

     </View> 
    </>
        )}
</Formik>
           
      </View>
  )
}
        
    


export default SignUpForm;

const styles = StyleSheet.create({
    wrapper:{
        marginTop:80,
    },
    inputField:{
        borderRadius:4,
        padding: 12,
        backgroundColor:'#FAFAFA',
        marginBottom:10,
        borderWidth:1,
    },
    button: isValid => ({
        backgroundColor: isValid ? '#0096F6' : '#9ACAF7',
        alignItems:'center',
        justifyContent:'center',
        minHeight:42,
        borderRadius:4
    }),
    buttonText: {
        fontWeight:'600',
        color:'#fff',
        fontSize: 20,
    },
    SignUpContainer:{
        flexDirection:'row',
        justifyContent:'center',
        marginTop: 50,
    }
})
