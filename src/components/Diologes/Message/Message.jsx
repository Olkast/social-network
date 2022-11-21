import React from "react";
import styles from "./../Dialogs.module.css"




const Message = (props) => {


    return (
        <div>
            <div>{props.message}</div>
        </div>
    )
}



export default Message;