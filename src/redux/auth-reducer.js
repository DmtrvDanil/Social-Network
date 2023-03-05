import {authAPI, loginAPI, logoutAPI} from "../api";

const SET_AUTH = 'SET_AUTH';
const LOGOUT = 'LOGOUT';


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

export const logout = (userId, email, login) => {
    return {
        type: LOGOUT,
        userId,
        email,
        login
    }
}


export const authThunkCreator = () => {
    return (dispatch) => {
        authAPI.getAuth().then(response => {
            if (response.resultCode === 0) {
                let {id, login, email} = response.data;
                dispatch(setAuth(id, email, login));
            }
        })
    }
}

export const loginThunkCreator = (email, password) => {
    return (dispatch) => {
        loginAPI.login(email, password).then(response => {
            if (response.resultCode === 0) {
                authAPI.getAuth().then(response => {
                    if (response.resultCode === 0) {
                        let {id, login, email} = response.data;
                        dispatch(setAuth(id, email, login));
                    }
                })
            }
        })
    }
}

export const logoutThunkCreator = (logout, email, login) => {
    return (dispatch) => {
        logoutAPI.logout().then(response => {
            if (response.resultCode === 0) {
                dispatch(setAuth(logout, email, login));
            }
        })
    }
}



export default authReducer;