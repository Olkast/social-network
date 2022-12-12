const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

const initialState = {
    users: [
        {id: 1, fullName: "Alex", status: "I am a boss", location: {city: "Russia", country: "Moscow" }},
        {id: 2, fullName: "Petya", status: "I am a boss too", location: {city: "Belarus", country: "Minsk" }},
        {id: 3, fullName: "Olga", status: "I am a boss too", location: {city: "Ukraine", country: "Kiev" }},
        {id: 4, fullName: "Vanya", status: "I am a boss too", location: {city: "Russia", country: "Piter" }},
    ],
}

const usersReducer = (state = initialState, action) => {

    let copyState = {...state};

    switch (action.type) {
        case FOLLOW:
            return copyState;

        case UNFOLLOW:

            return copyState;
        default:
            return state;
    }

}

export const followAC = () => ({type: FOLLOW});

export const unfollowAC = () => ({type: UNFOLLOW});


export default usersReducer;