import React, {createRef} from "react";
import styles from "./AddMessage.module.css";



const AddMessage = (props) => {

    const addNewMessage = () => {
        props.AddMessage();
    }

    const onChange = (e) => {
        const message = e.target.value;
        props.UpDateMessage(message);
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