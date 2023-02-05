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
    switch (action.type) {
        case UPDATE_MESSAGE_TEXT: {
            let stateCopy = {...state};
            stateCopy.messageText = action.messageText;
            return stateCopy;
        };
        case SEND_MESSAGE: {
            let newMessage = {
                name: 'Tema',
                message: state.messageText
            };
            let stateCopy = {...state};
            stateCopy.dialogData = [...state.dialogData];
            stateCopy.dialogData.push(newMessage);
            stateCopy.messageText = '';
            return stateCopy;
        };
        default:
            return state;
    }
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