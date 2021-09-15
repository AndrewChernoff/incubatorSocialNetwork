import React from 'react';
import { Field, Form } from 'react-final-form';
import { maxValue, required, composeValidators, minValue } from '../../../../Validate/validator';
import { Textarea } from '../../../../Validate/FormsControl';
import s from './MyPosts.module.css';
import Post from './Post';

const MyPosts = React.memo(function MyPosts(props)  {
  let postElements = props.post.map(post => <Post message={post.message} likeCount={post.likeCount} key={post.id} />);

  let onAddPost = (value) => {
    let postText = value;
    props.addPost(postText);
  }
    
  return (
    <div className={s.postsBlock}>
      <AddPostForm onAddPost={onAddPost} />
      <div className={s.item}>
        New post
      </div>
      <div className={s.post}>
        {postElements}
      </div>
    </div>
  )
})

const AddPostForm = (props) => {
  const onSubmit = (e) => {
    props.onAddPost(e.text);
    e.text = ''
  }

  const maxValue20 = maxValue(20)

  return (
    <div>
       <Form
        onSubmit={onSubmit}

        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>  
            <Field name={'text'} component={Textarea} placeholder={'Create post'}  validate={composeValidators(required, maxValue20, minValue(1))}/>
            <button> Add post</button>
          </form>
        )} /> 


    </div>

  )
}

export default MyPosts;