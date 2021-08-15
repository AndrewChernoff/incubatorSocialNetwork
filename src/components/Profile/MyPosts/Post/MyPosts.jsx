import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post';

const MyPosts = (props) => {
  let postElements = props.post.map(p => <Post message={p.message} likeCount={p.likeCount} />);
  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updatePostText(text);
  }

  return (
    <div className={s.postsBlock}>
      <div className={s.item}>
        <div>
          <h3>My posts</h3>
          <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}></textarea>
          <div>
            <button onClick={onAddPost}>Add post</button>
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