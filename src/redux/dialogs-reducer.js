const UPDATE_MESSAGE_TEXT = 'UPDATE_MESSAGE_TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';


let initialState = {
        dialogData: [
            {name: 'Tema', message: 'hello'},
            {name: 'Katya', message: 'hello_lol'}
        ],
    auth: false
}
const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let newMessage = {
                name: 'Tema',
                message: action.message
            };
            let stateCopy = {
                ...state,
                dialogData: [...state.dialogData, newMessage],
                messageText: ''
            };
            return stateCopy;
        };
        default:
            return state;
    }
}

export const sendMessageActionCreator = (message) => {
    return {
        type: SEND_MESSAGE,
        message
    };
}


export default dialogsReducer;