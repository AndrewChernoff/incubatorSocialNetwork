import React from 'react';
import { addPostActionCreator } from '../../../../redux/profileReducer';
import { updatePostTextCreator } from '../../../../redux/profileReducer';
import StoreContext from '../../../../storeContext';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {

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
                    posts={store.getState().profileComponent.posts}
                    newPostText={store.getState().profileComponent.newPostText} />
            }
        }
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer;