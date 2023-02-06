import React from "react";

const User = (props) => {
    let onFollow = () => {
        if (props.followStatus === true) props.unfollow(props.userId);
        else props.follow(props.userId);
    }
    return (
        <div>
            <img src={props.photo} alt="photo"/>
            <p>
                {props.name};
            </p>
            <p>
                {props.age};
            </p>
            <p>
                {props.country}
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