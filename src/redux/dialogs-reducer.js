const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE = 'UPDATE-MESSAGE';

const initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {

    let copyState = {...state};

    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage = {
                id: 5,
                message: state.newMessageText,
            }
            copyState.messagesData = [...state.messagesData];
            copyState.messagesData.push(newMessage);
            copyState.newMessageText = '';
            return copyState;
        case UPDATE_MESSAGE:
            copyState.newMessageText = action.message;
            return copyState;
        default:
            return state;
    }

}

export const AddMessageActionCreator = () => ({type: ADD_MESSAGE});

export const UpDateMessageActionCreator = (message) => ({
    type: UPDATE_MESSAGE, message: message});


export default dialogsReducer;