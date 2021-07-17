import React from 'react';
import { addPostActionCreator } from '../../../../redux/profileReducer';
import { updatePostTextCreator } from '../../../../redux/profileReducer';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
    let state = props.store.getState();
    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let onPostChange = (text) => { 
        let action = updatePostTextCreator(text);
        props.store.dispatch(action);
    }

    return (
        <MyPosts addPost={addPost} 
        updatePostText={onPostChange} 
        posts={state.profileComponent.posts}
        newPostText={state.profileComponent.newPostText}/>
    )
}

export default MyPostsContainer;