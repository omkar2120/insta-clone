import React from 'react'
import { StyleSheet, Text, View , Image } from 'react-native'
import SignUpForm from '../component/signupScreen/SignUpForm'

const INSTAGRAM_LOGO = 'https://www.pngarts.com/files/9/Instagram-Logo-PNG-Free-Download.png'


const SignUpScreen = ({navigation}) => {
    
    

    return (
        <View style={styles.container}>
        <View style={styles.logoContainer}>
            <Image source={{uri :INSTAGRAM_LOGO ,height: 100 ,width:100 }} />  
        </View>
        <SignUpForm  navigation={navigation}/>
      </View>
    )
}

const styles= StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'white',
        paddingTop: 50,
        paddingHorizontal: 12
        
    },
    logoContainer: {
        alignItems:'center',
        marginTop:60
    },
})

export default SignUpScreen;

