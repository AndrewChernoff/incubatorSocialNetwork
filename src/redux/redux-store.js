import { applyMiddleware, combineReducers, createStore } from "redux";
import dialogReducer from "./dialogReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";
import authReducer from './authReducer';
import thunkMiddleWare  from 'redux-thunk';

let reducers = combineReducers({
    profileComponent: profileReducer,
    dialogsComponent: dialogReducer,
    sidebarReducer: sidebarReducer, ////Pay attention to it
    usersPage: usersReducer,
    authPage: authReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

window.store = store;

export default store;