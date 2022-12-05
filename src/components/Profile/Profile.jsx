import React from "react";
import ProfileInfo from "./MyPosts/Post/ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/Post/MyPostsContainer";

const Profile = (props) => {


    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;