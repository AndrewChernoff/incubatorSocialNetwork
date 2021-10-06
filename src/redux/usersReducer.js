import { usersAPI } from "../API/api";
import { updateObjectInArray } from "../utilits/object-helpers";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const FOLLOWING_IN_PROGRESS = 'FOLLOWING_IN_PROGRESS';

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 19,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userID, 'id', { followed: true })
                /* state.users.map(u => {
                    if (u.id === action.userID) {
                        return { ...u, followed: true }
                    }
                    return u;
                }) */
            }

        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userID, 'id', { followed: false })
                /* state.users.map(u => {
                    if (u.id === action.userID) {
                        return { ...u, followed: false }
                    }
                    return u;
                }) */
            }

        case SET_USERS:
            return {
                ...state,
                users: action.users
            }

        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.pageNumber
            }

        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.count
            }

        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userID] :
                    state.followingInProgress.filter(id => id !== action.userID)
            }

        default: return state;
    }
}

export const followSucces = (userID) => ({ type: FOLLOW, userID });
export const unfollowSucces = (userID) => ({ type: UNFOLLOW, userID });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (pageNumber) => ({ type: SET_CURRENT_PAGE, pageNumber });
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const toggleFollowingProgress = (isFetching, userID) => ({ type: FOLLOWING_IN_PROGRESS, isFetching, userID });

export const getUserThunk = (pageSize, currentPge) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        let data = await usersAPI.getUsers(pageSize, currentPge)
        dispatch(setCurrentPage(currentPge))
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
    }
}

export const unfollow = (userID) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, usersAPI.unfollowUser.bind(usersAPI), unfollowSucces, userID)
        /*  dispatch(toggleFollowingProgress(true, userID));
        let data = await usersAPI.unfollowUser(userID)
             if (data.resultCode === 0) {
                 dispatch(unfollowSucces(userID));
             }
             dispatch(toggleFollowingProgress(false, userID)) */
    }
}

export const follow = (userID) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, usersAPI.followUser.bind(usersAPI), followSucces, userID)
        /*  dispatch(toggleFollowingProgress(true, userID));
     let data = await usersAPI.followUser(userID)
             if (data.resultCode === 0) {
                 dispatch(followSucces(userID))
             }
             dispatch(toggleFollowingProgress(false, userID)); */
    }
}

const followUnfollowFlow = async (dispatch, APImethod, actionCreator, userID) => {
    dispatch(toggleFollowingProgress(true, userID));
    let data = await APImethod(userID)
    if (data.resultCode === 0) {
        dispatch(actionCreator(userID))
    }
    dispatch(toggleFollowingProgress(false, userID));

}

export default usersReducer;