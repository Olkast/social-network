import React from "react";
import ProfileInfo from "./MyPosts/Post/ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/Post/MyPostsContainer";

const Profile = (props) => {


    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer
                store={props.store}
                // profilePage={props.profilePage}
                // dispatch={props.dispatch}
            />
        </div>
    )
}

export default Profile;