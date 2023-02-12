import React from "react";
import {followAC, unfollowAC, setUsersAC, setSelPageAC, setCountUsersAC, preloadAC} from "../../../redux/users-reducer";
import {connect} from "react-redux";
import User from "./User";
import axios from "axios";
import style from "../Users.module.css";
import Preloader from "../../Preloader/Plreloader";

let mapStateToProps = (state) => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        countUsers: state.usersPage.usersCount,
        selectedPage: state.usersPage.selectedPage,
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
        }
    }
}


class UsersCont extends React.Component {
    componentDidMount() {
        if (this.props.usersPage.usersData.length === 0) {
            this.props.preloader(true);
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.selectedPage}&count=${this.props.pageSize}`).then(response => {
                this.props.preloader(false);
                this.props.setUsers(response.data.items);
                this.props.setCountUsers(response.data.totalCount);
            })
        }
    }

    onPagePick = (pageNum) => {
        this.props.preloader(true);
        this.props.setCurPage(pageNum);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNum}&count=${this.props.pageSize}`).then(response => {
            // this.props.preloader(false);
            this.props.setUsers(response.data.items);
            this.props.setCountUsers(response.data.totalCount);
        })
    }
    render() {
        let userElements =  this.props.usersPage.usersData.map((user) => {
            return (
                <User userId={user.id} followStatus={user.followStatus} name={user.name} age={user.age} photo={user.photo} follow={this.props.onFollow} unfollow={this.props.onUnfollow}></User>
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