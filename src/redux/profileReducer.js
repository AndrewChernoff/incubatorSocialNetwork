import { profileAPI, usersAPI } from "../API/api";

const Add_Post = 'Add-Post';
const Update_Post_Text = 'Update-Post-Text';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS ';
const UPDATE_USER_STATUS = 'UPDATE_USER_STATUS ';

let initialState = {
  posts: [
    { id: 1, message: 'Hi, how are you?', likeCount: 15 },
    { id: 2, message: 'It\'s my first post', likeCount: 20 },
  ],
  newPostText: 'it-samurai',
  userProfile: null,
  status: ''
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
        posts: [...state.posts, newPost],
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

    case SET_USER_STATUS: {
      return {
        ...state,
        status: action.status
      }
    }

    case UPDATE_USER_STATUS: {
      return {
        ...state,
        status: action.status
      }
    }

    default: return state;
  }
}

export const addPostActionCreator = () => ({ type: Add_Post });
export const updatePostTextCreator = (text) => ({ type: Update_Post_Text, newText: text });
export const setUserProfile = (userProfile) => ({ type: SET_USER_PROFILE, userProfile });
export const setUserStatus = (status) => ({ type: SET_USER_STATUS, status });

export const getUserProfile = (userId) => (dispatch) => {
  usersAPI.getProfile(userId)
    .then(response => {
      dispatch(setUserProfile(response.data));
    }
    )
}

export const getUserStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId)
    .then(response => {
      dispatch(setUserStatus(response.data));
    }
    )
}

export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status)
    .then(response => {
      if(response.data.resultCode === 0) {
      dispatch(setUserStatus(status));
      }
    }
    )
}


export default profileReducer