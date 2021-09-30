import React from 'react';
import ProfileInfo from '../ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/Post/MyPostsContainer';

const Profile = (props) => {

  return (
    <div>
      <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} isOwner={props.isOwner} {...props} />
      <MyPostsContainer />
    </div>
  )
}




export default Profile;