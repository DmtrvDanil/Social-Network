import React from "react";
import {followAC, unfollowAC, setUsersAC, setSelPageAC, setCountUsersAC} from "../../../redux/users-reducer";
import {connect} from "react-redux";
import User from "./User";
import Users from "../Users";

let mapStateToProps = (state) => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        countUsers: state.usersPage.usersCount,
        selectedPage: state.usersPage.selectedPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onFollow: (userId) => {
            dispatch(followAC(userId));
        },
        onUnfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (usersData) => {
            dispatch(setUsersAC(usersData));
        },
        setCurPage: (currentPage) => {
            dispatch(setSelPageAC(currentPage));
        },
        setCountUsers: (usersCount) => {
            dispatch(setCountUsersAC(usersCount));
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export  default UsersContainer;