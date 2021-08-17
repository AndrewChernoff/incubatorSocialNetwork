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

export const setUserAuthData = (id, email, login) => ({type: SET_USER_DATA, data: {id, email, login}})

export default authReducer;