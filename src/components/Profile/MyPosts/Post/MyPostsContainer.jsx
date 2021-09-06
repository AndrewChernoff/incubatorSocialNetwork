import { connect } from 'react-redux';
import { addPostActionCreator } from '../../../../redux/profileReducer';
import MyPosts from './MyPosts';

let mapStateToProps = (state) => {
    return { 
        post: state.profileComponent.posts,
        newPostText: state.profileComponent.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
         addPost: (postText) => {
            dispatch(addPostActionCreator(postText));
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts);

export default MyPostsContainer;