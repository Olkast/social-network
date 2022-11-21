import React, {createRef} from "react";
import styles from "./AddMessage.module.css";



const AddMessage = (props) => {

    const newPostText = props.dialogs.newPostText;

    const addText = createRef();

    const addNewMessage = () => {
      const newtText = addText.current.value;
        props.addMessage(newtText);
    }

    const onChange = () => {
        const newtText = addText.current.value;
        props.updatePost(newtText);
    }

    return (
        <div className={styles.AddMessage}>
            <textarea value={ newPostText } onChange={onChange} ref={addText} cols="30" rows="2"></textarea>
            <button onClick={ addNewMessage }>Добавить</button>
        </div>
    )
}

export default AddMessage;