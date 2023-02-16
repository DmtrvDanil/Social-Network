import React from "react";
import {
    followAC,
    unfollowAC,
    setUsersAC,
    setSelPageAC,
    setCountUsersAC,
    preloadAC,
    followProgressAC
} from "../../../redux/users-reducer";
import {connect} from "react-redux";
import User from "./User";
import axios from "axios";
import style from "../Users.module.css";
import Preloader from "../../Preloader/Plreloader";
import {usersAPI} from "../../../api";

let mapStateToProps = (state) => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        countUsers: state.usersPage.usersCount,
        selectedPage: state.usersPage.selectedPage,
        followingProgress: state.usersPage.followProgress,
        preload: state.preload
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
        },
        preloader: (preload) => {
            dispatch(preloadAC(preload));
        },
        onFollowingProgress: (userId) => {
            dispatch(followProgressAC(userId));
        }
    }
}

class UsersCont extends React.Component {
    componentDidMount() {
        if (this.props.usersPage.usersData.length === 0) {
            this.props.preloader(true);
            usersAPI.getUsers(this.props.selectedPage, this.props.pageSize).then(response => {
                this.props.preloader(false);
                this.props.setUsers(response.items);
                this.props.setCountUsers(response.totalCount);
            })
        }
    }

    onPagePick = (pageNum) => {
        this.props.preloader(true);
        this.props.setCurPage(pageNum);
        usersAPI.getUserPage(pageNum, this.props.pageSize).then(response => {
            this.props.setUsers(response.items);
            this.props.setCountUsers(response.totalCount);
        })
    }
    render() {
        let userElements =  this.props.usersPage.usersData.map((user) => {
            return (
                <User onFollowingProgress={this.props.onFollowingProgress}
                      followingProgress={this.props.followingProgress}
                      userId={user.id} followStatus={user.followed} name={user.name} age={user.age}
                      photo={user.photo} follow={this.props.onFollow} unfollow={this.props.onUnfollow}></User>
            )
        })
        let pagesCount = this.props.countUsers / this.props.pageSize;
        if (pagesCount%2 !== 0) pagesCount++;
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (
            <div>
                <div>
                    {pages.map(p => {
                        return <span className={this.props.selectedPage === p && style.active_pag}
                                     onClick={() => {this.onPagePick(p)}}>{p}</span>
                    })}
                </div>
                <Preloader preloaderStatus={this.props.preloader}></Preloader>
                {userElements}
            </div>
        )
    }
}



const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersCont)

export  default UsersContainer;