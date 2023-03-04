const SET_PROFILE = 'SET_PROFILE';
const PRELOAD= 'PRELOAD';
const SET_STATUS = 'SET_STATUS';
const UPDATE_STATUS = 'UPDATE_STATUS';

let initialState = {
    profilePage: null,
    preload: true,
    auth: false,
    status: "lol",
    statusText: "lol status11"
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROFILE: {
            return {
                ...state,
                profilePage: action.profileData
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case UPDATE_STATUS: {
            return {
                ...state,
                statusText: action.statusText
            }
        }
        default:
            return state;
    }
}

export const getProfileAC = (profileData) => {
    return {
        type: SET_PROFILE,
        profileData
    }
}

export const getStatusAC = (status) => {
    return {
        type: SET_STATUS,
        status
    }
}

export const updateStatusAC = (statusText) => {
    return {
        type: UPDATE_STATUS,
        statusText
    }
}

export const preloadAC = (preload) => {
    return {
        type: PRELOAD,
        preload
    }
}

export default profileReducer;