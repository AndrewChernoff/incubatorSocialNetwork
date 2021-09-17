import { authAPI } from "../API/api";

const SET_USER_DATA = 'samurai-network/SET_USER_DATA';
const WRONG_AUTH = 'WRONG_AUTH';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    wrongAuth: false
}

let authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            }

        case WRONG_AUTH:
            return {
                ...state,
                wrongAuth: action.wrongAuth
            }
    }
    return state;
}

export const setUserAuthData = (id, email, login, isAuth) => ({ type: SET_USER_DATA, data: { id, email, login, isAuth } });
export const wrongAuth = (wrongAuth) => ({ type: WRONG_AUTH, wrongAuth });

export const getAuthUserData = () => async (dispatch) => {
  let data = await authAPI.me()
            if (data.resultCode === 0) {
                let { id, email, login } = data.data;
                dispatch(setUserAuthData(id, email, login, true));
                dispatch(wrongAuth(false));

            }
        
}

export const loginUser = (email, password, rememberMe) => async (dispatch) => {
    let data = await authAPI.login(email, password, rememberMe)          
            if (data.data.resultCode === 0) {
                dispatch(getAuthUserData());
            } else if (data.data.messages[0] === 'Enter valid Email' || 'Incorrect Email or Password') {
                dispatch(wrongAuth(true));
            }
        
}


export const logoutUser = () => async (dispatch) => {
    let data = await authAPI.logout()        
        if (data.data.resultCode === 0) {
            dispatch(setUserAuthData(null, null, null, false))
        }  
}

export default authReducer;