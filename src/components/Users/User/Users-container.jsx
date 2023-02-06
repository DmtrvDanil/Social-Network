import React from "react";
import {followAC, unfollowAC} from "../../../redux/users-reducer";
import {connect} from "react-redux";
import User from "./User";
import Users from "../Users";

let mapStateToProps = (state) => {
    return {
        usersPage: state.usersPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onFollow: (userId) => {
            dispatch(followAC(userId));
        },
        onUnfollow: (userId) => {
            dispatch(unfollowAC(userId));
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export  default UsersContainer;