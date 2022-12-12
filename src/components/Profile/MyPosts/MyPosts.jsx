import React, {createRef} from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";



const MyPosts = (props) => {

    const clickAddPost = () => {
        props.AddPost();
    }

    const onChangePost = (e) => {
        const text = e.target.value;
        props.UpDatePost(text);
    }

    return (
    <div className={styles.myPost}>
        <h3>My posts</h3>
        <div>
            <div className={styles.TextArea}>
                <textarea
                    value={ props.newPostText }
                    onChange={ onChangePost }
                    cols="30"
                    rows="2">
                </textarea>
            </div>
            <div>
                <button
                    onClick={clickAddPost}
                    className={styles.button}>
                    Help me
                </button>
            </div>
        </div>
        <div>
            {props.postData.map(({text}) => {

                return (
                    <Post text={text}/>
                )
            })}

        </div>
    </div>
    )
}

export default MyPosts;