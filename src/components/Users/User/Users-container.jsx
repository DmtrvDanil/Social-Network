import React from "react";
import {
    follow,
    unfollow,
    setUsers,
    setSelPage,
    setCountUsers,
    preload,
    preloadAC,
    getUsersThunkCreator,
    disfollowProgress,
    usersOnPageThunkCreator,
    unfollowThunkCreator,
    followThunkCreator
} from "../../../redux/users-reducer";
import {connect} from "react-redux";
import User from "./User";
import style from "../Users.module.css";
import Preloader from "../../Preloader/Plreloader";
import {
    getCountUsers,
    getFollowingProgress,
    getPageSize, getPreload,
    getSelectedPage,
    getUsersPage
} from "../../../redux/users-selector";

// let mapStateToProps = (state) => {
//     return {
//         usersPage: state.usersPage,
//         pageSize: state.usersPage.pageSize,
//         countUsers: state.usersPage.usersCount,
//         selectedPage: state.usersPage.selectedPage,
//         followingProgress: state.usersPage.followProgress,
//         preload: state.preload
//     }
// }


let mapStateToProps = (state) => {
    return {
        usersPage: getUsersPage(state),
        pageSize: getPageSize(state),
        countUsers: getCountUsers(state),
        selectedPage: getSelectedPage(state),
        followingProgress: getFollowingProgress(state),
        preload: getPreload(state)
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        preloader: (preload) => {
            dispatch(preloadAC(preload));
        }
    }
}

class UsersCont extends React.Component {
    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.selectedPage, this.props.pageSize);
    }

    onPagePick = (pageNum) => {
        this.props.usersOnPageThunkCreator(pageNum, this.props.pageSize);
    }
    render() {
        let userElements =  this.props.usersPage.usersData.map((user) => {
            return (
            <User onFollowingProgress={this.props.disfollowProgress}
                  followingProgress={this.props.followingProgress}
                  userId={user.id} followStatus={user.followed} name={user.name} age={user.age}
                  photo={user.photos.large} follow={this.props.followThunkCreator} unfollow={this.props.unfollowThunkCreator}></User>
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
                <Preloader preloaderStatus={this.props.preload}></Preloader>
                {userElements}
            </div>
        )
    }
}


const UsersContainer =  connect(mapStateToProps, {follow, unfollow, setUsers, setSelPage, preload,
                                                                    setCountUsers, disfollowProgress,
                                                                    getUsersThunkCreator, usersOnPageThunkCreator,
                                                                    unfollowThunkCreator, followThunkCreator})(UsersCont);

export  default UsersContainer;