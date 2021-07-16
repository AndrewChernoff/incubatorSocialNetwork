import React from 'react';
import ProfileInfo from '../ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/Post/MyPosts';
import MyPostsContainer from './MyPosts/Post/MyPostsContainer';
import s from './Profile.module.css';

const Profile = (props) => { 
  debugger
  return (
    <div>
      <ProfileInfo/>

       <MyPostsContainer store={props.store}/>
    </div>
  ) 
}

export default Profile;