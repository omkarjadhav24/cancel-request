import React from 'react'
import {NavLink,Switch,Route} from 'react-router-dom'
import Post from '../post/post'
import NewPost from '../newpost/newpost'
 const Nav =(props)=>{
     return (
         <>
            <NavLink to="/post">Post</NavLink>
            <NavLink to="/newpost">NewPost</NavLink>
            <Switch>
                <Route path="/post" component={Post} />
                <Route path="/newpost" component={NewPost}/>
            </Switch>
         </>
     )
 };
 export default Nav ;