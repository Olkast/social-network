import React from "react";
import styles from "./Friends.module.css";


const Friends = (props) => {


    const sideBarElements = props.sideBar.map(friend => (
        <div className={styles.icon}>
            <img className={styles.img} src="https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg" alt=""/>
            <p>{friend.name}</p>
        </div>
    ));


    return(
        <div>
            <p className={styles.title}>Friends</p>
            <div className={styles.icons}>
                {sideBarElements}
            </div>
        </div>
    )
}


export default Friends;