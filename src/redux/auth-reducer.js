import {headerAPI} from "../api";

const SET_AUTH = 'SET_AUTH';


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH: {
            return {
                ...state,
                ...action.data,
                userId: action.userId,
                email: action.email,
                login: action.login,
                isAuth: true
            }
        }
        default: return state;
    }
}

export const setAuth = (userId, email, login) => {
    return {
        type: SET_AUTH,
        userId,
        email,
        login
    }
}


export const authThunkCreator = () => {
    return (dispatch) => {
        headerAPI.getAuth().then(response => {
            if (response.resultCode === 0) {
                let {id, login, email} = response.data;
                dispatch(setAuth(id, email, login));
            }
        })
    }
}

export default authReducer;