import React from "react";
import style from './Post.module.css'

const Post = (props) => {
    return (
        <div className={style.post}>
            <img src="https://www.shutterstock.com/image-vector/cat-avatar-profile-picture-7-260nw-1660656721.jpg" alt="cat"/>
            <div className={style.userInfo}>
                <p className={style.name}>
                    {props.name};
                </p>
                <p className={style.message}>
                    {props.message};
                </p>
            </div>
        </div>  
    )
}
