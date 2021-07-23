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
                    posts={store.getState().profileComponent.posts}
                    newPostText={store.getState().profileComponent.newPostText} />
            }
        }
        </StoreContext.Consumer>
    )
}  */

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

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;