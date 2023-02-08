import React from "react";
import User from "./User/User";
import axios from 'axios';


class Users extends React.Component {
    componentDidMount() {
        if (this.props.usersPage.usersData.length === 0) {
            alert("fe");
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                this.props.setUsers(response.data.items);
            })
        }
    }
    userElements =  this.props.usersPage.usersData.map((user) => {
        return (
            <User userId={user.id} followStatus={user.followStatus} name={user.name} age={user.age} photo={user.photo} follow={this.props.onFollow} unfollow={this.props.onUnfollow}></User>
        )
    })

    render() {
        return (
            <div>
                {this.userElements}
            </div>
        )
    }
}



export default Users;