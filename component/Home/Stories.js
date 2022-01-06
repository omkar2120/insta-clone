import React from 'react'
import { ScrollView, StyleSheet, Text, View , Image} from 'react-native'
import { Users } from '../../data/Users'



const Stories = () => {
    return (
        <View style={{ marginBottom:13 }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          
           {  Users.map((story,index) => ( 
               <View key= {index} style={{alignItems:'center'}}  >
               <Image source={{uri:  story.image}}  style={styles.story} />
               <Text style={{color:'white'}}>{story.user}</Text>
               </View>
         ))}
         </ScrollView>
         
            <Text style={{color:'white'}}>Stories</Text>
        </View>
    )
}

export default Stories

const styles = StyleSheet.create({
    story:{
       width: 75,
       height:70,
       borderRadius: 50,
       marginLeft: 6,
       borderWidth: 3,
       borderColor:'#ff8501',

    }
})
