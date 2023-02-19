import pageReducer from "./page-reducer";
import dialogsReducer from "./dialogs-reducer";
import {applyMiddleware, combineReducers, createStore} from "redux";
import usersReducer from "./users-reducer";
import profileReducer from "./profile-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";


let reducers = combineReducers({
    postPage: pageReducer,
    dialogPage: dialogsReducer,
    usersPage: usersReducer,
    profilePage: profileReducer,
    auth: authReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;