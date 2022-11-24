const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE = 'UPDATE-MESSAGE';
const ADD_POST = 'ADD-POST';
const UPDATE_POST = 'UPDATE-POST';

const store =  {
    _state: {
        profilePage: {
            postData: [
                {id: 1, text: "Hello"},
                {id: 2, text: "Hello, girl"},
                {id: 3, text: "Hello, friend"},
                {id: 4, text: "Hello, brother"},
                {id: 5, text: "Hello"},
                {id: 6, text: "Hello"}
            ],
            newPostText: 'react',
        },
        dialogsPage: {
            dialogData: [
                {id: 1, name: "Alex"},
                {id: 2, name: "Petya"},
                {id: 3, name: "Olga"},
                {id: 4, name: "Vanya"},
                {id: 5, name: "Petya"},
                {id: 6, name: "Tanya"}
            ],
            messagesData: [
                {id: 1, message: "Hello"},
                {id: 2, message: "No"},
                {id: 3, message: "Yes"},
                {id: 4, message: "Hello"},
                {id: 5, message: "No"},
                {id: 6, message: "Yes"}
            ],
            newMessageText: 'react',
        },
        sideBar: [
            {id:1, name: 'Olga'},
            {id:2, name: 'Alex'},
            {id:3, name: 'Vanya'}
        ],
    },
    _callSubscriber()  {
        console.log('hello')
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._state;
    },

    dispatch (action) {
        switch (action.type) {
            case ADD_MESSAGE:
                const newMessage = {
                    id: 5,
                    message: this._state.dialogsPage.newMessageText,
                }
                this._state.dialogsPage.messagesData.push(newMessage);
                this._callSubscriber(this._state);
                this._state.dialogsPage.newMessageText = '';
                break
            case UPDATE_MESSAGE:
                this._state.dialogsPage.newMessageText = action.message;
                this._callSubscriber(this._state);
                break
            case ADD_POST:
                const newPost = {
                    id: 7,
                    text: this._state.profilePage.newPostText,
                }
                this._state.profilePage.postData.push(newPost);
                this._callSubscriber(this._state);
                this._state.profilePage.newPostText = '';
                break
            case UPDATE_POST:
                this._state.profilePage.newPostText = action.text;
                this._callSubscriber(this._state);
                break
        }
    },
}

export const AddMessageActionCreator = () => ({type: ADD_MESSAGE});

export const UpDateMessageActionCreator = (newtText) => ({
    type: UPDATE_MESSAGE, message: newtText});

export const AddPostActionCreator = () => ({type: ADD_POST});

export const UpDatePostActionCreator = (postText) => ({
    type: UPDATE_POST, text: postText});

export default store;


