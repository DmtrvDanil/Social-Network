import React, {Component} from "react";
import style from './Post.module.css'

const Post = React.memo(props => {
    let onDeletePost = () => {
        props.deletePost(props.id);
    }
        return (
        <div className={style.post}>
            <div>
                <button onClick={onDeletePost}>
                    delete post
                </button>
            </div>
            <div>
            <img src="https://www.shutterstock.com/image-vector/cat-avatar-profile-picture-7-260nw-1660656721.jpg"
                 alt="cat"/>
            <div className={style.userInfo}>
                <p className={style.name}>
                    {props.name}
                </p>
                <p className={style.age}>
                    {props.age} old
                </p>
                <p className={style.message}>
                    {props.message}
                </p>
            </div>
            </div>
        </div>
        )
});
export default Post;