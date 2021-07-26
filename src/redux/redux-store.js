import { combineReducers, createStore } from "redux";
import dialogReducer from "./dialogReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";

let reducers = combineReducers({
    profileComponent: profileReducer,
    dialogsComponent: dialogReducer,
    sidebarReducer: sidebarReducer
})

let store = createStore(reducers);

window.store = store

export default store;