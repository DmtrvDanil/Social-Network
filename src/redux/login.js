import {loginAPI} from "../api";

const LOGIN = 'LOGIN'

let initialState = {
    email: null,
    password: null,
    isLogin: false
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN: {
            return {
                ...state,
                email: action.email,
                password: action.password,
                isLogin: true
            }
        }
        default: return state;
    }
}

export const loginDone = (email, password) => {
    return {
        type: LOGIN,
        email,
        password
    }
}

// export const loginThunkCreator = () => {
//     return (dispatch) => {
//         loginAPI.login(email, password).then(response => {
//             if (response.resultCode === 0) {
//                 dispatch(loginDone(email, password));
//             }
//         })
//     }
// }

export default loginReducer;