import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
    <div className={styles.myPost}>
        <h3>My posts</h3>
        <div>
            <div className={styles.TextArea}>
                <textarea name="" id="" cols="30" rows="2"></textarea>
            </div>
            <div>
                <button className={styles.button}>Help me</button>
            </div>
        </div>
        <div>
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    </div>
    )
}

export default MyPosts;