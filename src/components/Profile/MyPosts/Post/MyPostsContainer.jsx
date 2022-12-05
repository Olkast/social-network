import React, {createRef} from "react";
import {AddPostActionCreator, UpDatePostActionCreator} from "../../../../redux/profile-reducer";
import MyPosts from "../MyPosts";
import {connect} from "react-redux";
import Post from "../Post/Post";

const mapStateToProps = (state) => {
    return {

        profilePage:state.profilePage,
        newPostText:state.profilePage.newPostText,
        postData:state.profilePage.postData,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        AddPost: () => {
            dispatch(AddPostActionCreator());
        },
        UpDatePost: (textRef) => {
            dispatch(UpDatePostActionCreator(textRef));
        }
    }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


export default MyPostsContainer;