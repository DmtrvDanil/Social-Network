import pageReducer from "./page-reducer";
import dialogsReducer from "./dialogs-reducer";
import {combineReducers, createStore} from "redux";


let reducers = combineReducers({
    postPage: pageReducer,
    dialogPage: dialogsReducer
})

let store = createStore(reducers);

export default store;