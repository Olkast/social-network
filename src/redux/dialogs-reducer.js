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

    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage = {
                id: 5,
                message: state.newMessageText,
            }
            state.messagesData.push(newMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_MESSAGE:
            state.newMessageText = action.message;
            return state;
        default:
            return state;
    }

}

export const AddMessageActionCreator = () => ({type: ADD_MESSAGE});

export const UpDateMessageActionCreator = (newtText) => ({
    type: UPDATE_MESSAGE, message: newtText});


export default dialogsReducer;