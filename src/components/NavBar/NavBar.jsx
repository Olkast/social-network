import React from "react";
import styles from "./NavBar.module.css";
import {NavLink} from "react-router-dom";

const NavBar = () => {
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
        </nav>
    )
}

export default NavBar;