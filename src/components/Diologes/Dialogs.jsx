import React from "react";
import styles from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";



const DialogItem = (proms) => {
    return (
        <div className={styles.dialog}>
            <NavLink to={'/dialogs/' + proms.number}>{proms.name}</NavLink>
        </div>
    )
}

const Message = (proms) => {
    return (
        <div className={styles.message}>{proms.message}</div>
    )
}


const Dialogs = (proms) => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItem}>
                <DialogItem name="Alex" number="1"/>
                <DialogItem name="Petya" number="2"/>
                <DialogItem name="Olga" number="3"/>
                <DialogItem name="Vanya" number="4"/>
                <DialogItem name="Petya" number="5"/>
                <DialogItem name="Tanya" number="6"/>
            </div>
            <div className={styles.messages}>
                <Message message="Hello"/>
                <Message message="No"/>
                <Message message="Yes"/>
                <Message message="Yes"/>
                <Message message="No"/>
                <Message message="No"/>
            </div>
        </div>
    )
}

export default Dialogs;