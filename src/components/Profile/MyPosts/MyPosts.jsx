import React, {createRef} from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = (props) => {

    const newPostText = props.newPostText;

    const clickAddPost = () => {
        props.AddPost();
    }

    const onChangePost = (event) => {
        const text = event.target.value;
        props.UpDatePost(text);
    }

    return (
    <div className={styles.myPost}>
        <h3>My posts</h3>
        <div>
            <div className={styles.TextArea}>
                <textarea
                    value={ newPostText }
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
            {props.profilePage.postData.map(({text}) => {
                return <Post text={text}/>
            })}

        </div>
    </div>
    )
}

export default MyPosts;