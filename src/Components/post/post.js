import React, { useEffect, useState } from 'react'
import './post.css'
import AllPost from '../AllPost/allpost'
import axios from 'axios'
// fake api
let usersEndpoint = "https://jsonplaceholder.typicode.com/users";
// cancel token
const CancelToken = axios.CancelToken;
const source = CancelToken.source();
 const Post =(props)=>{
     // states
     const [post,setPost]=useState([])
     
     // for api get res
     useEffect(()=>{
        axios.get(usersEndpoint,{cancelToken: source.token})
        .then(res=>{
            const posts = res.data.slice( 0, 4 );
            const updatedPosts = posts.map( post => {return {...post}});
            setPost([updatedPosts])
        })
        .catch(err=>console.log(err));
        // .catch( (thrown)=> {
        //     // showed unmounted message
        //     // if (axios.isCancel(thrown)) console.log('Request canceled', thrown.message) 
        //     // else {}
        //           });
        return () => {
           source.cancel("Landing Component got unmounted")
            console.log("Cancel")
          }
     },[])
     // for showing rendered post
     let showPosts=null;
    showPosts=post.map(data=>data.map(sdata=><AllPost key={sdata.id} id={sdata.id} title={sdata.name} />))
     return (
            <>
            {showPosts}
            </>
     )
 };
 export default Post ;