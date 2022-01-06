import React,{useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View ,Image } from 'react-native'
import { Divider } from 'react-native-elements/dist/divider/Divider'

export const bottomTabIcons = [
    {
        name:'Home',
        active:'https://img.icons8.com/fluency-systems-filled/48/ffffff/home.png',
        inactive:'https://img.icons8.com/fluency-systems-regular/48/ffffff/home.png'
    },
    {
        name:'Search',
        active:'https://img.icons8.com/material/24/ffffff/search--v1.png',
        inactive:'https://img.icons8.com/fluency-systems-regular/48/ffffff/search.png'
    },
    // {
    //     name:'Reels',
    //     active:"https://img.icons8.com/fluency-systems-regular/48/ffffff/streaming-video.png",
    //     inactive:'https://img.icons8.com/fluency-systems-filled/48/ffffff/streaming-video.png'
    // },
    {
        name:'Shop',
        active:'https://img.icons8.com/material/24/ffffff/like--v1.png',
        inactive:'https://img.icons8.com/fluency-systems-regular/48/ffffff/like--v1.png',
    },
    {
        name:'Profile',
        active: 'https://pixlok.com/wp-content/uploads/2021/03/Avtar-Icon-PNG-Image.jpg',
        inactive:'https://pixlok.com/wp-content/uploads/2021/03/Avtar-Icon-PNG-Image.jpg'
    },
   
]



const BottomTabs = ({icons}) => {
    const [activeTab , setActiveTabs] = useState('Home')

    const Icon = ({icon}) => (
        <TouchableOpacity  onPress={() => setActiveTabs(icon.name)} >
             <Image  
                  source={{ uri: activeTab === icon.name ? icon.active: icon.inactive}} 
                  style={[
                      styles.icon, 
                      icon.name === 'Profile ' ?
                      styles.profilePic() : null,]}    />   

        </TouchableOpacity>
    )
    return (
        <View style={styles.wrapper}>
        <View style={styles.container}> 
         {/* <Divider width={1}  orientation='horizontal ' /> */}

           {icons.map((icon,index) => (
               <Icon key={index} icon={icon} />
           ))}
        </View>
        </View>
    )
}

export default BottomTabs

const styles = StyleSheet.create({
    wrapper: {
        position :'absolute',
        width:'100%',
        bottom:'0.01%',
        zIndex:999,
        backgroundColor:'#000'
    },
    container: {
        flexDirection:'row',
        // justifyContent:'space-between',
        height:50,
        paddingTop:10,
        justifyContent:'space-around'
    },
    icon: {
        width:30,
        height:30,

    },
    profilePic:(activeTab = "") => ({
        borderRadius: 50,
        borderWidth: activeTab === 'Profile' ? 2 : 0,
        borderColor:'#fff'
    }),
    
})
