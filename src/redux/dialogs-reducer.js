const UPDATE_MESSAGE_TEXT = 'UPDATE_MESSAGE_TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';


let initialState = {
        dialogData: [
            {name: 'Tema', message: 'hello'},
            {name: 'Katya', message: 'hello_lol'}
        ],
        messageText: 'Write your message'
}
const dialogsReducer = (state = initialState, action) => {
    if (action.type === UPDATE_MESSAGE_TEXT) {
        state.messageText = action.messageText;
    }
    else if (action.type === SEND_MESSAGE) {
        let newMessage = {
            name: 'Tema',
            message: state.messageText
            }
        state.dialogData.push(newMessage);
        state.messageText = '';
    }
    return state;
}

export const sendMessageActionCreator = () => {
    return {
        type: SEND_MESSAGE
    };
}

export const updateMessageTextActionCreator = (message) => {
    return {
        type: UPDATE_MESSAGE_TEXT,
        messageText: message
    }
}

export default dialogsReducer;