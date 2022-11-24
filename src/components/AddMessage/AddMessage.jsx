import React, {createRef} from "react";
import styles from "./AddMessage.module.css";
import {AddMessageActionCreator, UpDateMessageActionCreator} from "../../redux/state";

const AddMessage = (props) => {

    const newMessageText = props.dialogs.newMessageText;

    const addNewMessage = (event) => {
        props.dispatch(AddMessageActionCreator(event.target.value));
    }

    const onChange = (event) => {
        props.dispatch(UpDateMessageActionCreator(event.target.value));
    }

    return (
        <div className={styles.AddMessage}>
            <textarea value={ newMessageText } onChange={onChange}  cols="30" rows="2"></textarea>
            <button onClick={ addNewMessage }>Добавить</button>
        </div>
    )
}

export default AddMessage;