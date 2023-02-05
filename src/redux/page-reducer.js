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
    switch (action.type) {
        case ADD_POST: {
            let stateCopy = {...state};
            stateCopy.postsData = [...state.postsData];
            let newPost = {
                name: "Tema",
                age: '20',
                message: stateCopy.postText
            }
            stateCopy.postsData.push(newPost);
            stateCopy.postText = '';
            return stateCopy;
        }
        case UPDATE_POST_TEXT: {
            let stateCopy = {...state};
            stateCopy.postText = action.postText;
            return stateCopy;
        }
        default:
            return state;
    }
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