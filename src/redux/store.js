import pageReducer from "./page-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
    _state : {
        postPage: {
            postsData: [
                {name: 'Danil', age: '21', message: 'lol'},
                {name: 'Danil', age: '21', message: 'lol'},
                {name: 'Danil', age: '21', message: 'lol'},
                {name: 'Danil', age: '21', message: 'lol'}
            ],
            postText: 'something'
        },
        dialogPage: {
            dialogData: [
                {name: 'Tema', message: 'hello'},
                {name: 'Katya', message: 'hello_lol'}
            ],
            messageText: 'Write your message'
        },
        profilePage: {
            profileData: [
                {name: 'Danil', date: '02.05.2001', city: 'California'}
            ]
        }
    },

    getState () {
        return this._state;
    },

    _callSibscriber () {
        console.log("reload");
    },

    sibscribe (observer) {
        this._callSibscriber = observer;
    },

    dispatch (action) {
        this._state.postPage = pageReducer(this._state.postPage, action);
        this._state.dialogPage = dialogsReducer(this._state.dialogPage, action);
        this._callSibscriber(this._state);
    }

}
export  default store;