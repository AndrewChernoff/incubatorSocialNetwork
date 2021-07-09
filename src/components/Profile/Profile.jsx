import React from 'react';
import ProfileInfo from '../ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/Post/MyPosts';
import s from './Profile.module.css';

const Profile = (props) => { 
  return (
    <div>
      <ProfileInfo/>

       <MyPosts posts={props.state.posts} 
      newPostText={props.newPostText.newPostText}
      dispatch={props.dispatch}/>
    </div>
  ) 
}

export default Profile;