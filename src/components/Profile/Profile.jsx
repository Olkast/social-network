import React from "react";
// import styles from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div>
                <img src="https://dubaitrippackages.files.wordpress.com/2017/11/2-imgdinosaurs_base.jpg" alt=""/>
            </div>
            <div>Post</div>
            <MyPosts />
        </div>
    )
}

export default Profile;