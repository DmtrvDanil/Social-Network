import pageReducer from "./page-reducer";
import dialogsReducer from "./dialogs-reducer";
import {combineReducers, createStore} from "redux";
import usersReducer from "./users-reducer";


let reducers = combineReducers({
    postPage: pageReducer,
    dialogPage: dialogsReducer,
    usersPage: usersReducer
})

let store = createStore(reducers);

export default store;