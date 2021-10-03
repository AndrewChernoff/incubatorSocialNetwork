import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import dialogReducer from "./dialogReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";
import authReducer from './authReducer';
import thunkMiddleWare from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'
import { appReducer } from "./appReducer";

let reducers = combineReducers({
    profileComponent: profileReducer,
    dialogsComponent: dialogReducer,
    sidebarReducer: sidebarReducer, ////Pay attention to it
    usersPage: usersReducer,
    authPage: authReducer,
    app: appReducer
})

//let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleWare)));

window.store = store;

export default store;