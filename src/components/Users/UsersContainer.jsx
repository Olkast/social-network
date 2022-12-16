import React from "react";
import {connect} from "react-redux";
import {followAC, setUsers, unfollowAC} from "../../redux/users-reducer";
import Users from "./Users";



const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        photo: state.usersPage.photo
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
       follow: (userId) => {
           dispatch(followAC(userId));
       },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsers(users));
        }
    };
};



const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);


export default UsersContainer;
