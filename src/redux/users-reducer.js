const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';


let initialState = {
        usersData: [
            {id: 1, followStatus: false, name: 'Danil', age: '21', location: {country: 'USA', city: 'California'}, photo: 'https://www.shutterstock.com/image-vector/cat-avatar-profile-picture-7-260nw-1660656721.jpg'},
            {id: 2, followStatus: true, name: 'Tema', age: '20', location: {country: 'USA', city: 'California'}, photo: 'https://www.shutterstock.com/image-vector/cat-avatar-profile-picture-7-260nw-1660656721.jpg'}
        ]
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

export default usersReducer;