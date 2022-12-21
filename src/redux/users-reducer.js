const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT';


const initialState = {
    users: [],
    pageSize: 3,
    totalUserCount: 0,
    currentPage: 1,
}

const usersReducer = (state = initialState, action) => {


    switch (action.type) {
        case FOLLOW:

            return {
                ...state,
                users: state.users.map ( u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false};
                    }
                    return u;
                } )};

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true};
                    }
                    return u;
                })};


        case SET_USERS:
            return { ...state, users: action.users  };

        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.number };

        case SET_TOTAL_USER_COUNT:
            return { ...state, totalUserCount: action.totalUserCount };

        default:
            return state;
    }

}

export const followAC = (userId) => ({type: FOLLOW, userId});

export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});

export const setUsers = (users) => ({type: SET_USERS, users});

export const setCurrentPage = (number) => ({type: SET_CURRENT_PAGE, number});
export const setTotalUserCount = (totalUserCount) => ({type: SET_TOTAL_USER_COUNT, totalUserCount});

export default usersReducer;