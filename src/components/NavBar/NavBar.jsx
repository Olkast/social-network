import React from "react";
import styles from "./NavBar.module.css";
import {NavLink} from "react-router-dom";
import Friends from "../Friends/Friends";

const NavBar = (props) => {

    return (
        <nav className={styles.nav}>
            <div className={styles.item}>
                <NavLink className={({ isActive }) =>
                    isActive ? styles.active : undefined
                } to="/profile">Profile</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink className={({ isActive }) =>
                    isActive ? styles.active : undefined
                } to="/dialogs">Messages</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink className={({ isActive }) =>
                    isActive ? styles.active : undefined
                } to="/news">News</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink className={({ isActive }) =>
                    isActive ? styles.active : undefined
                } to="/music">Music</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink className={({ isActive }) =>
                    isActive ? styles.active : undefined
                } to="/setting">Setting</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink className={({ isActive }) =>
                    isActive ? styles.active : undefined
                } to="/setting"><Friends sideBar={props.state.sideBar} /></NavLink>
            </div>
        </nav>
    )
}

export default NavBar;