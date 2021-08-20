import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator } from '../../../../redux/profileReducer';
import { updatePostTextCreator } from '../../../../redux/profileReducer';
import StoreContext from '../../../../storeContext';
import MyPosts from './MyPosts';

let mapStateToProps = (state) => {
    return { 
        post: state.profileComponent.posts,
        newPostText: state.profileComponent.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updatePostText: (text) => {
            let action = updatePostTextCreator(text);
            dispatch(action); ;
         },
         addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts);

export default MyPostsContainer;