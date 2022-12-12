import React, {createRef} from "react";
import {AddPostActionCreator, UpDatePostActionCreator} from "../../../../redux/profile-reducer";
import MyPosts from "../MyPosts";
import {connect} from "react-redux";

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
        UpDatePost: (text) => {
            dispatch(UpDatePostActionCreator(text));
        }
    }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


export default MyPostsContainer;