import React, { useEffect, useState } from 'react'
import AllPost from '../AllPost/allpost'
import axios from 'axios'
let usersEndpoint = "https://jsonplaceholder.typicode.com/users";
let source = axios.CancelToken.source();
 const Post =(props)=>{
     const [post,setPost]=useState([])
     useEffect(()=>{
        axios.get(usersEndpoint,{cancelToken: source.token})
        .then(res=>{
            const posts = res.data.slice( 0, 4 );
            const updatedPosts = posts.map( post => {
                return {
                    ...post               
                 }
            } );
            setPost([updatedPosts])
        })
        .catch(err=>{
            console.log(err)
        })
        return () => {
            if (source) source.cancel("Landing Component got unmounted")
          }
     },[])
     let showPosts=null;
    showPosts=post.map(data=>data.map(sdata=><AllPost key={sdata.id} id={sdata.id} title={sdata.name} />))
     return (
            <>
            {showPosts}
            </>
     )
 };
 export default Post ;