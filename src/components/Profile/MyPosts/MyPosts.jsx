import React, {createRef} from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import {AddPostActionCreator, UpDatePostActionCreator} from "../../../redux/state";

const MyPosts = (props) => {

    const newPostText = props.profilePage.newPostText;

    const addPost = (event) => {
        props.dispatch(AddPostActionCreator(event.target.value));
    }

    const onChangePost = (event) => {
        props.dispatch(UpDatePostActionCreator(event.target.value))
    }

    return (
    <div className={styles.myPost}>
        <h3>My posts</h3>
        <div>
            <div className={styles.TextArea}>
                <textarea value={ newPostText } onChange={ onChangePost } name="" id="" cols="30" rows="2"></textarea>
            </div>
            <div>
                <button onClick={ addPost } className={styles.button}>Help me</button>
            </div>
        </div>
        <div>
            {props.profilePage.postData.map(({text}) => {
                return <Post text={text}/>
            })}

        </div>
    </div>
    )
}

export default MyPosts;