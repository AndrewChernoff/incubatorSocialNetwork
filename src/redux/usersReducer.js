const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        /* { id: 1, photoURL: 'https://yt3.ggpht.com/ytc/AAUvwnihEIew1x--ivyCNeGwa13y-FShBYm9rGl_sXxVEg=s800-c-k-c0x00ffffff-no-rj', followed: false, fullName: 'Andrew Chernoff', status: 'Everything is awesome', location: { country: 'USA', city: 'Chicago' } },
        { id: 2, photoURL: 'https://yt3.ggpht.com/ytc/AAUvwnihEIew1x--ivyCNeGwa13y-FShBYm9rGl_sXxVEg=s800-c-k-c0x00ffffff-no-rj', followed: true, fullName: 'Artemus Dolgin', status: 'Chudila from Zhytomir', location: { country: 'USA', city: 'Los Andgeles' } },
        { id: 3, photoURL: 'https://yt3.ggpht.com/ytc/AAUvwnihEIew1x--ivyCNeGwa13y-FShBYm9rGl_sXxVEg=s800-c-k-c0x00ffffff-no-rj', followed: true, fullName: 'Serega Rastorguev', status: 'That was it', location: { country: 'USA', city: 'Los Andgeles' } },
        { id: 4, photoURL: 'https://yt3.ggpht.com/ytc/AAUvwnihEIew1x--ivyCNeGwa13y-FShBYm9rGl_sXxVEg=s800-c-k-c0x00ffffff-no-rj', followed: false, fullName: 'Alisher Abdulloev', status: 'Assalam Aleikum, pharmasists', location: { country: 'Germany', city: 'Berlin' } }
    */  ] 
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }
        
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }

        default: return state;
    }
}

export const followAC = (userID) => ({ type: FOLLOW, userID });
export const unfollowAC = (userID) => ({ type: UNFOLLOW, userID });
export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default usersReducer;