const ADD_POST = 'ADD_POST';
const UPDATE_POST_TEXT = 'UPDATE_POST_TEXT';
const UPDATE_MESSAGE_TEXT = 'UPDATE_MESSAGE_TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';

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
        if (action.type === ADD_POST) {
            let newPost = {
                name: "Tema",
                age: '20',
                message: this._state.postPage.postText
            }
            this._state.postPage.postsData.push(newPost);
            this._state.postPage.postText = '';
            this._callSibscriber(this._state);
        }
        else if (action.type === UPDATE_MESSAGE_TEXT) {
            this._state.dialogPage.messageText = action.messageText;
            this._callSibscriber(this._state);
        } else if (action.type === UPDATE_POST_TEXT) {
            this._state.postPage.postText = action.postText;
            this._callSibscriber(this._state);
        }
        else if (action.type === SEND_MESSAGE) {
            let newMessage = {
                name: 'Tema',
                message: this._state.dialogPage.messageText
                }
            this._state.dialogPage.dialogData.push(newMessage);
            this._state.postPage.postText = '';
            this._callSibscriber(this._state);
        }
    }

}

export const sendMessageActionCreator = () => {
    return {
        type: SEND_MESSAGE
    };
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    };
}
export const updateTextActionCreator = (message) => {
    return {
        type: UPDATE_POST_TEXT,
        postText: message
    }
}

export const updateMessageTextActionCreator = (message) => {
    return {
        type: UPDATE_MESSAGE_TEXT,
        messageText: message
    }
}
export  default store;