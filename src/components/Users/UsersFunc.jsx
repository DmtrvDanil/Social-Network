// import React from "react";
// import User from "./User/User";
// import axios from 'axios';
//
// const UsersCont = (props) => {
//
//  let getUsers = () => {
//      if (props.usersPage.usersData.length === 0) {
//          axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
//              console.log(response.data.items);
//              props.setUsers(response.data.items);
//              // console.log(props.usersPage.usersData);
//          })
//      }
//  }
//
//     let userElements = props.usersPage.usersData.map((user) => {
//         return (
//
//             <User userId={user.id} followStatus={user.followStatus} name={user.name} age={user.age} photo={user.photo} follow={props.onFollow} unfollow={props.onUnfollow}></User>
//         )
//     })
//
//     return (
//         <div>
//             <button onClick={getUsers}>
//                 Render users
//             </button>
//             {userElements}
//         </div>
//     )
// }
//
// export default UsersCont;