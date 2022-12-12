const ADD_POST = 'ADD-POST';
const UPDATE_POST = 'UPDATE-POST';

const initialState = {
    postData: [
        {id: 1, text: "Hello"},
        {id: 2, text: "Hello, girl"},
        {id: 3, text: "Hello, friend"},
    ],
    newPostText: 'react',
}

const profileReducer = (state = initialState, action) => {

    let copyState = { ...state }

    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: 4,
                text: state.newPostText,
            }
            copyState.postData = [...state.postData];
            copyState.postData.push(newPost);
            copyState.newPostText = '';
            return copyState;
        case UPDATE_POST:
            copyState.newPostText = action.text;
            return copyState;
        default:
            return state;
    }
}

export const AddPostActionCreator = () => ({type: ADD_POST});

export const UpDatePostActionCreator = (text) => ({
    type: UPDATE_POST, text: text});

export default profileReducer;