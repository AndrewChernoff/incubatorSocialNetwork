import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator } from '../../../../redux/profileReducer';
import { updatePostTextCreator } from '../../../../redux/profileReducer';
import StoreContext from '../../../../storeContext';
import MyPosts from './MyPosts';

/* const MyPostsContainer = (props) => {

    return (
        <StoreContext.Consumer> 
            {
            (store) => {
                let state = store.getState();

                let addPost = () => {
                    store.dispatch(addPostActionCreator());
                }

                let onPostChange = (text) => {
                    let action = updatePostTextCreator(text);
                    store.dispatch(action);
                }

                return <MyPosts addPost={addPost}
                    updatePostText={onPostChange}
                    posts={state.profileComponent.posts}
                    newPostText={state.profileComponent.newPostText} />
            }
        }
        </StoreContext.Consumer>
    )
} */


let mapStateToProps = (state) => {
    return { 
        newPostText: state.profileComponent.newPostText,
        post: state.profileComponent.posts
    }
}

let mapStateToDispatch = (dispatch) => {
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

const MyPostsContainer = connect(mapStateToProps, mapStateToDispatch)(MyPosts);

export default MyPostsContainer;