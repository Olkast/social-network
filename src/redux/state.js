const store =  {
    _state: {
        profilePage: {
            postData: [
                {id: 1, message: "Hello"},
                {id: 2, message: "Hello, girl"},
                {id: 3, message: "Hello, friend"},
                {id: 4, message: "Hello, brother"},
                {id: 5, message: "Hello"},
                {id: 6, message: "Hello"}
            ]
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
            newPostText: 'react',
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

    getState() {
        return this._state;
    },
    addMessage() {
        const newPost = {
            id: 5,
            message: this._state.dialogsPage.newPostText,
        }
        this._state.dialogsPage.messagesData.push(newPost);
        this._callSubscriber();
        this._state.dialogsPage.newPostText = '';
    },
    updatePost(postMessage) {
        console.log(postMessage)
        this._state.dialogsPage.newPostText = postMessage;
        this._callSubscriber();
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }

}

export default store;


