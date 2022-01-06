import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import LoginForm from '../component/loginScreen/LoginForm'

const INSTAGRAM_LOGO = 'https://www.pngarts.com/files/9/Instagram-Logo-PNG-Free-Download.png'


const LogInScreen = ({navigation}) =>  (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={{uri :INSTAGRAM_LOGO ,height: 100 ,width:100 ,}} />  
            </View>
            <LoginForm navigation={navigation}/>   
        </View>
    )



const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'white',
        paddingTop: 50,
        paddingHorizontal: 12
        
    },
    logoContainer: {
        alignItems:'center',
        marginTop:60
    }
})
export default LogInScreen; 
