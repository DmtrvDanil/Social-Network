const ADD_POST = 'ADD_POST';
const UPDATE_POST_TEXT = 'UPDATE_POST_TEXT';
const DELETE_POST = 'DELETE_POST';


let initialState = {
        postsData: [
            {id: 1, name: 'Daaaaanil', age: '21', message: 'lol'},
            {id: 2, name: 'Danil', age: '21', message: 'lol'},
            {id: 3, name: 'Danil', age: '21', message: 'lol'},
            {id: 4, name: 'Danil', age: '21', message: 'lol'},
            {id: 5, name: 'Danil', age: '21', message: 'lol'}
        ],
        postText: 'something'
}
const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: state.postsData[state.postsData.length - 1].id + 1,
                name: "Tema",
                age: '20',
                message: action.postText
            };
            let stateCopy = {
                ...state,
                postsData: [...state.postsData, newPost],
                postText: ''
            };
            return stateCopy;
        }
        case DELETE_POST: {
            let delData = [...state.postsData.splice(action.id - 1, 1)];
            return {
                ...state
            }
        };

        default:
            return state;
    }
}

export const addPostActionCreator = (postText) => {
    return {
        type: ADD_POST,
        postText
    };
};

export const deletePostAC = (id) => {
    return {
        type: DELETE_POST,
        id
    }
}



export default postReducer;