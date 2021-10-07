import { authAPI, securityAPI } from "../API/api";

const SET_USER_DATA = 'samurai-network/SET_USER_DATA';
const WRONG_AUTH = 'WRONG_AUTH';
const CAPTCHA_SUCCESS = 'CAPTCHA_SUCCESS';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    wrongAuth: false,
    captcha: null
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

        case CAPTCHA_SUCCESS:
            return {
                ...state,
                captcha: action.loginCaptcha
            }
        default:
            return state
    }

}

export const setUserAuthData = (id, email, login, isAuth) => ({ type: SET_USER_DATA, data: { id, email, login, isAuth } });
export const wrongAuth = (wrongAuth) => ({ type: WRONG_AUTH, wrongAuth });
export const captchaSuccess = (loginCaptcha) => ({ type: CAPTCHA_SUCCESS, loginCaptcha })

export const getAuthUserData = () => async (dispatch) => {
    let data = await authAPI.me()
    if (data.resultCode === 0) {
        let { id, email, login } = data.data;
        dispatch(setUserAuthData(id, email, login, true));
        dispatch(wrongAuth(false));

    }

}

export const loginUser = (email, password, rememberMe, captcha) => async (dispatch) => {
    let data = await authAPI.login(email, password, rememberMe, captcha)
    if (data.data.resultCode === 0) {
        dispatch(getAuthUserData());
    } else if (data.data.resultCode === 1) {
        dispatch(wrongAuth(true));
    } else if (data.data.resultCode === 10) {
        dispatch(captchaUrl());
    }
}

export const captchaUrl = () => (dispatch) => {
    securityAPI.getCaptcha().then(response => {
        dispatch(captchaSuccess(response.data.url))
    }
    )
}


export const logoutUser = () => async (dispatch) => {
    let data = await authAPI.logout()
    if (data.data.resultCode === 0) {
        dispatch(setUserAuthData(null, null, null, false))
    }
}

export default authReducer;