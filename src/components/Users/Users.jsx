import React from "react";
import User from "./User/User";
import axios from 'axios';

const Users = (props) => {


    if (props.usersPage.usersData.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            console.log(response.data.items);
            props.setUsers(response.data.items);
            // console.log(props.usersPage.usersData);
        })
        // props.setUsers([
        //     {
        //         id: 1,
        //         followStatus: false,
        //         name: 'Danil',
        //         age: '21',
        //         location: {country: 'USA', city: 'California'},
        //         photo: 'https://www.shutterstock.com/image-vector/cat-avatar-profile-picture-7-260nw-1660656721.jpg'
        //     },
        //     {
        //         id: 2,
        //         followStatus: true,
        //         name: 'Tema',
        //         age: '20',
        //         location: {country: 'USA', city: 'California'},
        //         photo: 'https://www.shutterstock.com/image-vector/cat-avatar-profile-picture-7-260nw-1660656721.jpg'
        //     }
        // ])
    }

    let userElements = props.usersPage.usersData.map((user) => {
        return (

            <User userId={user.id} followStatus={user.followStatus} name={user.name} age={user.age} photo={user.photo} follow={props.onFollow} unfollow={props.onUnfollow}></User>
        )
    })

    return (
        <div>
            {userElements}
        </div>
    )
}

export default Users;