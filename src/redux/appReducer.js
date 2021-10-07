import { getAuthUserData } from "./authReducer";

const INITIALIZED = 'INITIALIZED';

let initialState = {
    isInitialized: false
}

export const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case INITIALIZED:
            return {
                ...state,
                isInitialized: true
            }
        default:
            return state

    }
}

export const initializeSuccess = () => ({ type: INITIALIZED })

export const initializeApp = () => (dispatch) => {

    let promise = dispatch(getAuthUserData());

    Promise.all([promise]).then(() => {
        dispatch(initializeSuccess())
    })

}