import React from 'react'
import { StyleSheet, Text, View, Image ,TouchableOpacity } from 'react-native'
import { Divider } from 'react-native-elements/dist/divider/Divider';

//

const PostFooterIcon = [    //this array is for likes and comments and share icon
    {
        name:'Like',
        imageUrl:'https://img.icons8.com/fluency-systems-regular/48/ffffff/like--v1.png',
        likedImageUrl:'https://img.icons8.com/fluency-systems-filled/48/fa314a/filled-like.png'
    },
    {
        name:'Comment',
        imageUrl:'https://img.icons8.com/material-outlined/24/ffffff/filled-topic.png'
    },
    {
        name:'Share',
        imageUrl:'https://img.icons8.com/fluency-systems-regular/48/ffffff/forward-arrow.png'
    },
    {
        name:'Save',
        imageUrl:'https://img.icons8.com/fluency-systems-regular/48/ffffff/bookmark-ribbon--v1.png'
    },
]

const Post = ( {post} ) => {    // 
    return (
        <View style={{ marginBottom : 30 }}>
             <Divider width={1} orientation='vertical' />
             <PostHeader post={post} />
             <PostImage post={post} />
             <View style={{marginHorizontal:15,marginTop:10}}>
                <PostFooter/>
                <Likes post={post} />
                <Caption post={post} />
                <CommentSession post={post} />
                <Comments post={post} />

             </View>
            
        </View>
    )
}

export const PostHeader = ( {post} ) => (
    <View 
      style={{
          flexDirection:'row', 
          justifyContent:'space-between',
          margin:5, 
          alignItems:'center',
        //   backgroundColor:'pink'
          
        }}
    >
     <View style={{flexDirection:'row', alignItems:'center'}}>
         <Image source={{ uri: post.profile_picture}} style={styles.story}/>
         <Text style={{color:'white',marginLeft:5,fontWeight:'700' }}>
         {post.user}</Text>
     </View>
 
    <Text style={{color:'white', fontWeight:'900'}}>...</Text>
 </View>
)
// 
 const PostImage = ( {post} ) => (
     <View 
        style={{
            width: '100%',
            height:450, 
        }}>
      <Image 
        source={{uri: post.imageurl}} 
          style={{
             height:'100%',
             resizeMode:'cover'}}
      />
     </View>
 )
 
 // postfooter 
  
 const PostFooter = () => (
     <View style={{flexDirection:'row'}}>
       <View style={styles.leftFooterIcon}>
          <Icons imgstyle={styles.footerIcon} imgUrl={PostFooterIcon[0].imageUrl} />
          <Icons imgstyle={styles.footerIcon} imgUrl={PostFooterIcon[1].imageUrl} />
          <Icons imgstyle={styles.footerIcon} imgUrl={PostFooterIcon[2].imageUrl} />
        </View>

      <View style={{flex:1,alignItems:'flex-end'}}>
          <Icons imgstyle={styles.footerIcon} imgUrl={PostFooterIcon[3].imageUrl} />

      </View>

     </View>

 )
 
const Icons = ({imgstyle,imgUrl}) => (
    <TouchableOpacity>
        <Image style={imgstyle} source={{ uri : imgUrl }} />
    </TouchableOpacity>
)

const Likes = ({ post }) => (
    <View style={{flexDirection:'row',marginTop:4}}>
      <Text style={{color:'white',fontWeight:'600'}}>{post.likes.toLocaleString('en')} likes</Text>
    </View>
)
const Caption = ({ post }) => (
    <View style={{marginTop:5}}>
       <Text style={{color:'white',fontWeight:'600'}}>{post.user}</Text>
       <Text style={{color:'white'}}>{post.caption}</Text>
    </View>
)

const CommentSession = ({post})  => (
    <View style={{ marginTop: 5}}>
        {!!post.comments.length && (
            <Text style={{ color: 'grey'}}>
                View{post.comments.length >  1 ? 'all' : ''} {post.comment}
                {post.comments.length >  1 ? 'comments' : 'comments'}
            </Text>
        )}
    </View>
)

const Comments = ({post}) => (
    <>
        {post.comments.map((comment,index) => (
            <View key={index} style={{ flexDirection:'row', marginTop:5}}>
                <Text style={{color:'white'}}>
                    <Text style={{fontWeight: '600'}}>{comment.user}  </Text>
                      {comment.comment}
                </Text>
            </View>
        ))}
    </>
)

export default Post;

const styles = StyleSheet.create({
    story:{
        width: 35,
        height:35,
        borderRadius: 50,
        marginLeft: 6,
        borderWidth: 1.6,
        borderColor:'#ff8501',
 
     },
     footerIcon:{
         width:33,
         height:33
        
         
     },
     leftFooterIcon: {
         flexDirection:'row',
         width:'32%',
         justifyContent:'space-between',
         
     },
     shareIcon: {
         transform:[{rotate: '320deg'}],
         marginTop: -3,

     }
})
