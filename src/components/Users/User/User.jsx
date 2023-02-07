import React from "react";

const User = (props) => {
    let onFollow = () => {
        if (props.followStatus === true) props.unfollow(props.userId);
        else props.follow(props.userId);
    }
    let photo = props.photo;
    if ( photo == null) photo = "https://www.shutterstock.com/image-vector/cat-avatar-profile-picture-7-260nw-1660656721.jpg"
    return (
        <div>
            <img src={photo} alt="photo"/>
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
            <button onClick={onFollow}>
                {props.followStatus === true ? 'unfollow' : 'follow'}
            </button>
        </div>
    )
}
export default User;