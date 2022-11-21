import React from "react";
import styles from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/Post/ProfileInfo/ProfileInfo";

const Profile = (props) => {
debugger;

    return (
        <div>
            <ProfileInfo />
            <MyPosts postData={props.profilePage.postData}/>
        </div>
    )
}

export default Profile;