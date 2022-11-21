import React, {createRef} from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

    let newPost = React.createRef();

    let addPost = () => {
        let text = newPost.current.value;
        alert(text)
    }

    return (
    <div className={styles.myPost}>
        <h3>My posts</h3>
        <div>
            <div className={styles.TextArea}>
                <textarea ref={ newPost } name="" id="" cols="30" rows="2"></textarea>
            </div>
            <div>
                <button onClick={ addPost } className={styles.button}>Help me</button>
            </div>
        </div>
        <div>
            {props.postData.map(({message}) => {
                return <Post message={message}/>
            })}

        </div>
    </div>
    )
}

export default MyPosts;