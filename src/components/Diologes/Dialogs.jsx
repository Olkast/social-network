import React from "react";
import styles from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import AddMessageContainer from "../AddMessage/AddMessageContainer";


const Dialogs = (props) => {

    const messagesData = props.store.getState().dialogsPage.messagesData;
    const dialogData = props.store.getState().dialogsPage.dialogData;

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItem}>
                {dialogData.map(dialog => <DialogItem
                    name={dialog.name}
                    id={dialog.id}
                />)}
            </div>
            <div className={styles.messages}>
                {messagesData.map(m => <Message message={m.message}/>)}
                <AddMessageContainer
                    store={props.store}
                />
            </div>
        </div>
    )
}

export default Dialogs;