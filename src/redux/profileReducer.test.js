import profileReducer, { addPostActionCreator, deletePost } from './profileReducer'

let state = {
  posts: [
    { id: 1, message: 'Hi, how are you?', likeCount: 15 },
    { id: 2, message: 'It\'s my first post', likeCount: 20 },
  ]
}

/* it ('length of post should be incremented', () => {
  let action = addPostActionCreator('IT-kamasutra'); 
  let newState = profileReducer(state,action);

  expect(newState.posts.length).toBe(3);
  expect(newState.posts[2].message).toBe('IT-kamasutra');
}); */

it ('length of post should be decremented', () => {
  let action = deletePost(1); 
  let newState = profileReducer(state,action);

  expect(newState.posts.length).toBe(1);
});