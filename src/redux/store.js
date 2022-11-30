import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sideBarReducer from "./sideBarReducer";

const store =  {
    _state: {
        profilePage: {
            postData: [
                {id: 1, text: "Hello"},
                {id: 2, text: "Hello, girl"},
                {id: 3, text: "Hello, friend"},
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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sideBar = sideBarReducer(this._state.sideBar, action)

        this._callSubscriber(this._state);
    },
}

export default store;


