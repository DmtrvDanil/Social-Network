const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';


let initialState = {
        usersData: [
            {id: 1, followStatus: false, name: 'Danil', age: '21', location: {country: 'USA', city: 'California'}},
            {id: 2, followStatus: true, name: 'Tema', age: '20', location: {country: 'USA', city: 'California'}}
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