import { StatusBar } from 'expo-status-bar';
import React , { useEffect , useState } from 'react'
import { View, Text, SafeAreaView , StyleSheet } from 'react-native'
import Header from '../component/Home/Header';
import Stories from '../component/Home/Stories';
import Post from '../component/Home/Post';
import { Posts } from '../data/Posts';
import { ScrollView } from 'react-native';
import BottomTabs, { bottomTabIcons } from '../component/Home/BottomTabs';
import { db } from '../firebase';

const HomeScreen = ({navigation}) => {
     const [posts ,  setPosts] = useState([])

     
    useEffect (() => {
         db.collectionGroup('posts').onSnapshot(snapshot => {
          setPosts(snapshot.docs.map(doc => doc.data()))     //first its data show in console now it will shown in your app
          })
    },[])

   
    return (
    
        <SafeAreaView style={styles.container}>
            <Header navigation={navigation} />
            <Stories />
            <ScrollView>
            {posts.map((post,index)=> (
                <Post post={post} key={index} />
            ))}
            </ScrollView>
            <BottomTabs icons={bottomTabIcons} />

        </SafeAreaView>

        
    )
}
    const styles = StyleSheet.create({

        container : {
            backgroundColor : 'black',
            flex : 1
        },
    })

export default HomeScreen;
