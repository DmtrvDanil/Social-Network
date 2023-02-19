const SET_PROFILE = 'SET_PROFILE';
const PRELOAD= 'PRELOAD';

let initialState = {
    profilePage: null,
    preload: true,
    auth: false
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROFILE: {
            return {
                ...state,
                profilePage: action.profileData
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

export const preloadAC = (preload) => {
    return {
        type: PRELOAD,
        preload
    }
}

export default profileReducer;