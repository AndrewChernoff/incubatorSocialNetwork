import { combineReducers, createStore } from "redux";
import dialogReducer from "./dialogReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";

let reducers = combineReducers({
    profileComponent: profileReducer,
    dialogsComponent: dialogReducer,
    sidebarReducer: sidebarReducer, ////Pay attention to it
    usersPage: usersReducer
})

let store = createStore(reducers);

window.store = store;

export default store;