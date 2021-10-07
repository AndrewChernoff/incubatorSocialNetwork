import React from 'react';
import ProfileInfo from '../ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/Post/MyPostsContainer';
import s from './Profile.module.css';

const Profile = (props) => {
  return (
    <div className={s.profile}>
      <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} isOwner={props.isOwner}
        saveProfile={props.saveProfile} {...props} invalidUrl={props.invalidUrl} />
      <MyPostsContainer />
    </div>
  )
}




export default Profile;