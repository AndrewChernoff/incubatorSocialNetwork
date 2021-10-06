import { profileAPI, usersAPI } from "../API/api";

const Add_Post = 'Add-Post';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
const DELETE_POST = 'DELETE_POST';
const UPLOAD_PHOTO = 'UPLOAD_PHOTO';
const SAVE_PROFILE = 'SAVE_PROFILE';
const INVALID_URL = 'INVALID_URL';

let initialState = {
  posts: [
    { id: 1, message: 'Hi, how are you?', likeCount: 15 },
    { id: 2, message: 'It\'s my first post', likeCount: 20 },
  ],
  userProfile: null,
  status: '',
  invalidUrl: null
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case Add_Post: {
      let newPost = {
        id: 3,
        message: action.postText,
        likeCount: 0
      }
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ''
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

    case DELETE_POST: {
      return {
        ...state,
        posts: state.posts.filter(p => p.id !== action.postId)
      }
    }

    case UPLOAD_PHOTO: {
      return {
        ...state,
        userProfile: { ...state.userProfile, photos: action.photo }
      }
    }

    case SAVE_PROFILE: {
      return {
        ...state,
        userProfile: action.profileData
      }
    }

    case INVALID_URL: {
      return {
        ...state,
        invalidUrl: action.invalidUrl
      }
    }

    default: return state;
  }
}


export const addPostActionCreator = (postText) => ({ type: Add_Post, postText });
export const setUserProfile = (userProfile) => ({ type: SET_USER_PROFILE, userProfile });
export const setUserStatus = (status) => ({ type: SET_USER_STATUS, status });
export const deletePost = (postId) => ({ type: DELETE_POST, postId });
export const uploadPhotoSuccess = (photo) => ({ type: UPLOAD_PHOTO, photo });
export const saveProfileSucces = (profileData) => ({ type: SAVE_PROFILE, profileData });
export const invalidUrl = (invalidUrl) => ({ type: INVALID_URL, invalidUrl });

export const getUserProfile = (userId) => async (dispatch) => {
  let response = await usersAPI.getProfile(userId)
  dispatch(setUserProfile(response.data));
}

export const getUserStatus = (userId) => async (dispatch) => {
  let response = await profileAPI.getStatus(userId)
  dispatch(setUserStatus(response.data));
}

export const updateStatus = (status) => async (dispatch) => {
  let response = await profileAPI.updateStatus(status)
  if (response.data.resultCode === 0) {
    dispatch(setUserStatus(status));
  }
}

export const uploadPhoto = (photo) => async (dispatch) => {
  let response = await profileAPI.savePhoto(photo)
  if (response.data.resultCode === 0) {
    dispatch(uploadPhotoSuccess(response.data.data.photos));
  }
}

export const saveProfile = (profileData) => async (dispatch, getState) => {
  let response = await profileAPI.saveProfileData(profileData)
  const userId = getState().authPage.id;
  if (response.data.resultCode === 0) {
    dispatch(invalidUrl(''))
    dispatch(getUserProfile(userId));
  } else if (response.data.resultCode === 1) {
    dispatch(invalidUrl(response.data.messages[0]))
  }
}

export default profileReducer