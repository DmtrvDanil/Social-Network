import React from "react";
import {NavLink} from "react-router-dom";
import {followAPI} from "../../../api";

const User = (props) => {
    let onFollow = () => {
        props.onFollowingProgress(true, props.userId);
        if (props.followStatus) {
            followAPI.unfollow(props.userId).then(response => {
                    if (response.resultCode === 0) {
                        props.unfollow(props.userId);
                        props.onFollowingProgress(false, props.userId);
                    }
            })
        } else {
            followAPI.follow(props.userId).then(response => {
                if (response.resultCode === 0) {
                    props.follow(props.userId);
                    props.onFollowingProgress(false, props.userId);
                }
            })
        }
    }
    let photo = props.photo;
    if ( photo == null) photo = "https://www.shutterstock.com/image-vector/cat-avatar-profile-picture-7-260nw-1660656721.jpg";
    return (
        <div>
            <NavLink to={'/profile/' + props.userId}>
                <img src={photo} alt="photo"/>
            </NavLink>

            <p>
                {props.name}
            </p>
            <p>
                {props.age}
            </p>
            <p>
                California
            </p>
            <p>
                {props.city}
            </p>
            <button onClick={onFollow} disabled={props.followingProgress.some(id => id === props.userId)}>
                {props.followStatus === true ? 'unfollow' : 'follow'}
            </button>
        </div>
    )
}
export default User;