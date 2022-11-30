import React, {createRef} from "react";
import styles from "./AddMessage.module.css";
import {AddMessageActionCreator, UpDateMessageActionCreator} from "../../redux/dialogs-reducer";

const AddMessage = (props) => {
    console.log(props)


    const addNewMessage = () => {
        props.AddMessage();
    }

    const onChange = (event) => {
        const text = event.target.value;
        props.UpDateMessage(text);
    }

    return (
        <div className={styles.AddMessage}>
            <textarea
                value={props.newMessageText}
                onChange={onChange}
                cols="30"
                rows="2">
            </textarea>
            <button onClick={addNewMessage}>Добавить</button>
        </div>
    )
}

export default AddMessage;