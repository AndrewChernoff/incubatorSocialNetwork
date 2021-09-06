import { authAPI } from "../API/api";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

let authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
    }
    return state;
}

export const setUserAuthData = (id, email, login, isAuth) => ({ type: SET_USER_DATA, data: { id, email, login, isAuth } });

export const getAuthUserData = () => (dispatch) => {
    authAPI.me()
        .then(data => {
            if (data.resultCode === 0) {
                let { id, email, login } = data.data;
                dispatch(setUserAuthData(id, email, login, true));
            }
        }
        )
}

export const loginUser = (email, password, rememberMe) => (dispatch) => {
        authAPI.login(email, password, rememberMe)
            .then(data => {
                if (data.resultCode === 0) {
                    console.log(data.resultCode)
                    dispatch(getAuthUserData());
                }
            }
            )
    }

    
export const logoutUser = () => (dispatch) => {
    authAPI.logout().then(data => {
        if(data.resultCode === 0) {
        dispatch(getAuthUserData(null, null, null, false))
        }
    })
} 

export default authReducer;