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
            let newPost = {
                name: "Tema",
                age: '20',
                message: action.postText
            }
            let stateCopy = {
                ...state,
                postsData: [...state.postsData, newPost],
                postText: ''
            };
            return stateCopy;
        }
        default:
            return state;
    }
}

export const addPostActionCreator = (postText) => {
    return {
        type: ADD_POST,
        postText
    };
}



export default postReducer;