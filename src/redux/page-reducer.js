const ADD_POST = 'ADD_POST';
const UPDATE_POST_TEXT = 'UPDATE_POST_TEXT';


let initialState = {
        postsData: [
            {name: 'Danil', age: '21', message: 'lol'},
            {name: 'Danil', age: '21', message: 'lol'},
            {name: 'Danil', age: '21', message: 'lol'},
            {name: 'Danil', age: '21', message: 'lol'}
        ],
        postText: 'something'
}
const postReducer = (state = initialState, action) => {
    if (action.type === ADD_POST) {
        let newPost = {
            name: "Tema",
            age: '20',
            message: state.postText
        }
        state.postsData.push(newPost);
        state.postText = '';
    }
    else if (action.type === UPDATE_POST_TEXT) {
        state.postText = action.postText;
    }
    return state;
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


export default postReducer;