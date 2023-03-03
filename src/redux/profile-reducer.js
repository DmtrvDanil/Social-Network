const SET_PROFILE = 'SET_PROFILE';
const PRELOAD= 'PRELOAD';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    profilePage: null,
    preload: true,
    auth: false,
    status: "lol"
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

export const preloadAC = (preload) => {
    return {
        type: PRELOAD,
        preload
    }
}

export default profileReducer;