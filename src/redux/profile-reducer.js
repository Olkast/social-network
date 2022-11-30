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

    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: 4,
                text: state.newPostText,
            }
            state.postData.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_POST:
            state.newPostText = action.text;
            return state;
        default:
            return state;
    }
}

export const AddPostActionCreator = () => ({type: ADD_POST});

export const UpDatePostActionCreator = (postText) => ({
    type: UPDATE_POST, text: postText});

export default profileReducer;