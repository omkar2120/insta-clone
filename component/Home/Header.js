import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { View, Text, StyleSheet , Image, TouchableOpacity } from 'react-native'
import {AsyncStorage} from '@react-native-async-storage/async-storage'
import { firebase } from '../../firebase'

const handleSignout = async () => {
   try {
       await firebase.auth().signOut()
       console.log('Signed Out succefully')
   } catch (error) {
       console.log(error)
   }
    
}
// console.log('hello')

const Header = ({navigation}) => {

     
    return (
        <View style={styles.container} >
        <StatusBar  hidden  /> 
            <TouchableOpacity onPress={handleSignout}   >               
            <Image 
                style={styles.logo} 
                source={require('../../assets/instalogo.png')} 
                
            />
            </TouchableOpacity>
            
            <View style={styles.iconsContainer} >
                <TouchableOpacity onPress={()=> navigation.push('NewPostScreen')}> 
                    <Image 
                     style={styles.icon}
                     source={{
                         uri:'https://img.icons8.com/fluency-systems-regular/48/ffffff/plus-2-math.png'
                     }}
                    
                    />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image 
                     style={styles.icon}
                     source={{
                         uri:'https://img.icons8.com/fluency-systems-regular/48/ffffff/like--v1.png'
                     }}
                    />
                </TouchableOpacity>

                <TouchableOpacity>
                   <View style={styles.unread}>
                       <Text style={styles.unreadtext}>12</Text>
                   </View>
                    <Image 
                     style={styles.icon}
                     source={{
                         uri:"https://img.icons8.com/fluency-systems-regular/48/ffffff/facebook-messenger.png"
                     }}
                    />
                </TouchableOpacity>

            </View>
        </View>
    )
}
    const styles = StyleSheet.create({
        container: {
            justifyContent : 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
            marginHorizontal: 20, 
        },
        iconsContainer: {
            flexDirection:'row',

        },
        icon: {
            width:30,
            height:30,
            marginLeft:10,
            resizeMode:'contain'
        },
   
        logo: {
            width: 100,
            height: 50,
            resizeMode: 'contain'
        },
        unread: {
            backgroundColor:'#FF3250',
            position:'absolute',
            left: 20,
            bottom: 10,
            width:25,
            height:18,
            borderRadius:25,
            alignItems:'center',
            justifyContent:'center',
            zIndex: 100,
        },
        unreadtext:{
            color:'white',
            fontWeight:'600',
        }
    })

export default Header;
