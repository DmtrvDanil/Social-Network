const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SETUSERS = 'SETUSERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_COUNT = 'SET_USERS_COUNT,';


let initialState = {
        usersData: [],
        pageSize: 5,
        countUsers: 0,
        selectedPage: 2
}
const  usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                usersData: state.usersData.map(u => {
                    if (u.id === action.userId) {
                            return {...u, followStatus: true}
                    }
                    return u;
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                usersData: state.usersData.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followStatus: false}
                    }
                    return u;
                })
            }
        }
        case SETUSERS: {
            return {
                ...state,
                usersData: [...action.usersData]
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                selectedPage: action.currentPage
            }
        }
        case SET_USERS_COUNT: {
            return {
                ...state,
                usersCount: action.usersCount
            }
        }
        default:
            return state;
    }
}

export const followAC = (userId) => {
    return {
    type: FOLLOW,
        userId
}}
 export const unfollowAC = (userId) => {
    return {
         type: UNFOLLOW,
        userId
     }
 }

 export const setUsersAC = (usersData) => {
    return {
        type: SETUSERS,
        usersData
    }
 }

export const setSelPageAC = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    }
}

export const setCountUsersAC = (usersCount) => {
    return {
        type: SET_USERS_COUNT,
        usersCount
    }
}

export default usersReducer;