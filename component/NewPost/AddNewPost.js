import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import FormikPostUploader from './FormikPostUploader'

const AddNewPost = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Header navigation={navigation} />
            <FormikPostUploader  navigation={navigation}/>
         </View>
    )
}

const Header = ({navigation}) => (
    
    <View style={styles.headerContainer}>
    <StatusBar hidden/>
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={{ uri : 'https://img.icons8.com/ios-glyphs/30/ffffff/back.png'}} 
                style={{ width: 30 , height: 30 }}
            /> 
         </TouchableOpacity>

            <Text style={styles.headerText}>NEW POST</Text>
            
        </View>
)

export default AddNewPost

const styles = StyleSheet.create({
    container: {
         marginHorizontal: 10,
    },
    headerContainer: {
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems:'center'
    },
    headerText: {
        color: '#fff',
        fontWeight:'700',
        fontSize: 20,
        marginLeft: 27.5
        
        
    }
})
