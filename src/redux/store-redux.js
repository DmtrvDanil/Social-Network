import pageReducer from "./page-reducer";
import dialogsReducer from "./dialogs-reducer";
import {combineReducers, createStore} from "redux";
import usersReducer from "./users-reducer";
import profileReducer from "./profile-reducer";


let reducers = combineReducers({
    postPage: pageReducer,
    dialogPage: dialogsReducer,
    usersPage: usersReducer,
    profilePage: profileReducer
})

let store = createStore(reducers);

export default store;