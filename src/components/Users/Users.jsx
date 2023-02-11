import React from "react";
import User from "./User/User";
import axios from 'axios';
import style from './Users.module.css'
import {setCountUsersAC} from "../../redux/users-reducer";


class Users extends React.Component {
    componentDidMount() {
        if (this.props.usersPage.usersData.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.selectedPage}&count=${this.props.pageSize}`).then(response => {
                this.props.setUsers(response.data.items);
                this.props.setCountUsers(response.data.totalCount);
            })
        }
    }
    userElements =  this.props.usersPage.usersData.map((user) => {
        return (
            <User userId={user.id} followStatus={user.followStatus} name={user.name} age={user.age} photo={user.photo} follow={this.props.onFollow} unfollow={this.props.onUnfollow}></User>
        )
    })


    onPagePick = (pageNum) => {
        this.props.setCurPage(pageNum);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNum}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setCountUsers(response.data.totalCount);
        })
    }
    render() {
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
                {this.userElements}
            </div>
        )
    }
}



export default Users;