import React, {createRef} from "react";
import styles from "./AddMessage.module.css";
import {AddMessageActionCreator, UpDateMessageActionCreator} from "../../redux/dialogs-reducer";
import AddMessage from "./AddMessage";

const AddMessageContainer = (props) => {

    const state = props.store.getState();

    const addNewMessage = () => {
        props.store.dispatch(AddMessageActionCreator());
    }

    const onChange = (text) => {
        props.store.dispatch(UpDateMessageActionCreator(text));
    }

    return (
        <AddMessage
            AddMessage={addNewMessage}
            UpDateMessage={onChange}
            newMessageText={state.dialogsPage.newMessageText}
        />
    )
}

export default AddMessageContainer;