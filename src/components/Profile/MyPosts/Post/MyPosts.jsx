import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post';
import { addPostActionCreator } from '../../../../redux/profileReducer';
import { updatePostTextCreator } from '../../../../redux/profileReducer';
const MyPosts = (props) => {
  let postElements = props.posts.map(p => <Post message={p.message} likeCount={p.likeCount} />);
  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch( addPostActionCreator());
  }

  let onPostChange = () => {
    debugger
    let text = newPostElement.current.value;
    props.dispatch(updatePostTextCreator(text));
  }

  return (
    <div className={s.postsBlock}>
      <div className={s.item}>
        <div>
          <h3>My posts</h3>
          <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}></textarea>
          <div>
            <button onClick={addPost}>Add post</button>
          </div>
        </div>
      </div>
      <div className={s.item}>
        New post
      </div>
      <div className={s.post}>
        {postElements}
      </div>
    </div>
  )
}

export default MyPosts;