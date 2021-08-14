const Add_Post = 'Add-Post';
const Update_Post_Text = 'Update-Post-Text';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
  posts: [
    { id: 1, message: 'Hi, how are you?', likeCount: 15 },
    { id: 2, message: 'It\'s my first post', likeCount: 20 },
  ],
  newPostText: 'it-samurai',
  userProfile: null
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) { 
    case Add_Post: {
      let newPost = {
        id: 3,
        message: state.newPostText,
        likeCount: 0
      }
      return {
        ...state,
        posts: [ ...state.posts, newPost ],
        newPostText: ''
       }
    }
    case Update_Post_Text: {
      return {
         ...state,
         newPostText: action.newText
       }
    }

    case SET_USER_PROFILE: {
      return {
         ...state,
         userProfile: action.userProfile
       }
    }
    default: return state;
  }
}

export const addPostActionCreator = () => ({ type: Add_Post });
export const updatePostTextCreator = (text) => ({ type: Update_Post_Text, newText: text });
export const setUserProfile = (userProfile) => ({ type: SET_USER_PROFILE, userProfile });


export default profileReducer