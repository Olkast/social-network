import React from "react";
import styles from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import AddMessage from "../AddMessage/AddMessage";






const Dialogs = (props) => {


    const messagesData = props.dialogs.messagesData;
    const dialogData = props.dialogs.dialogData;


    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItem}>
                {dialogData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)}
            </div>
            <div className={styles.messages}>
                {messagesData.map(m => <Message message={m.message}/>)}
                <AddMessage updatePost={props.updatePost} dialogs={props.dialogs} addMessage={props.addMessage}/>
            </div>
        </div>
    )
}

export default Dialogs;