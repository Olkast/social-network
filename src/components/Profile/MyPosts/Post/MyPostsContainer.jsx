import React, {createRef} from "react";
import {AddPostActionCreator, UpDatePostActionCreator} from "../../../../redux/profile-reducer";
import MyPosts from "../MyPosts";

const MyPostsContainer = (props) => {

    const state = props.store.getState();

    const addPost = () => {
        props.store.dispatch(AddPostActionCreator());
    }

    const onChangePost = (text) => {
        props.store.dispatch(UpDatePostActionCreator(text))
    }

    return (
        <MyPosts
            AddPost={addPost}
            UpDatePost={onChangePost}
            posts={state.post}
            profilePage={state.profilePage}
            newPostText={state.profilePage.newPostText}
        />)
}

export default MyPostsContainer;