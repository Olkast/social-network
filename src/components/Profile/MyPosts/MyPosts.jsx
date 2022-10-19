import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
    <div>
        My posts
        <div>
            <textarea name="" id="" cols="30" rows="2"></textarea>
            <button>Help me</button>
        </div>
        <div className = {styles.posts}>
            <Post name= 'uh' email='fmlkfm' />
            <Post />
            <Post />
            <Post />
        </div>
    </div>
    )
}

export default MyPosts;