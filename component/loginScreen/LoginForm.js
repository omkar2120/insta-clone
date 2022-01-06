import React,{useState } from 'react'
import { View, Text, TextInput,StyleSheet, Pressable, TouchableOpacity , Alert } from 'react-native'
import { Formik } from 'formik'
import  * as Yup from 'yup'
import { Validator } from 'email-validator'
import {firebase ,db} from '../../firebase'

const LoginForm = ({navigation}) => {

    const LoginFormSchema = Yup.object().shape({
         email: Yup.string().email().required('An email is required'),
         password: Yup.string() 
         .required()
         .min(8, 'Your password has to have at least 8 character')
    })

    const onLogin = async(email,password) => {
        try{  
            await firebase.auth().signInWithEmailAndPassword(email , password)
            console.log('Firebase Login Sucesssfully', email , password)
        } catch(error) {
            Alert.alert(error.message )
        }
    }

    return (

        <View style={styles.wrapper}>
          <Formik
            initialValues={{email: '' , password: ''}}
            onSubmit={(values) => {
                onLogin(values.email , values.password)
            }}
            validationSchema ={LoginFormSchema}
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
                 placeholder="Phone number , username or email"
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
             <View style={{alignItems:'flex-end',marginBottom:30}}>
                  <Text style={{color:'#6BB0F5',fontWeight:'300'}}>Forget Password</Text>
              </View>

       <Pressable 
            titleSize={20} 
            style={styles.button(isValid)}
            onPress={handleSubmit}
            disabled={!isValid}>

           <Text style={styles.buttonText}>Log In</Text>

       </Pressable>

       <View style={styles.SignUpContainer}>
           <Text>Dont have an account ?</Text>
           <TouchableOpacity onPress={() => navigation.push('SignUpScreen')}>
               <Text style={{color:'#6BB0F5'}}> SignUp</Text>
            
           </TouchableOpacity>

       </View>
      </>
          )}
</Formik>
             
        </View>
    )
}

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

export default LoginForm;
