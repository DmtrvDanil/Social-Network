import React from "react";
import User from "./User/User";

const Users = (props) => {
    let userElements = props.usersPage.usersData.map((user) => {
        return (
            <User userId={user.id} followStatus={user.followStatus} name={user.name} age={user.age} country={user.location.country} city={user.location.city} photo={user.photo} follow={props.onFollow} unfollow={props.onUnfollow}></User>
        )
    })

    return (
        <div>
            {userElements}
        </div>
    )
}

export default Users;