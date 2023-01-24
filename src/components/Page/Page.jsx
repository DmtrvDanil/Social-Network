import React from "react";
import Post from './Post/Post'
import style from './Page.module.css'
import Profile from "../Profile/Profile";

const Page = (props) => {
    let postElements = props.postsData.map((post) => {
        return (
            <Post name={post.name} age={post.age} message={post.message}></Post>
        )
    })
    return (
        <div className={style.page}>
            <Profile name='Danil' date='2 May 2001' city='California'></Profile>
            <div className='posts'>
                <div className='addPost'>
                    <h3 className='posts__heading'>
                        My posts
                    </h3>
                    <textarea className='posts__textAdd'></textarea>
                    <button className='posts__btn'>
                        Send
                    </button>
                </div>
                <div className={style.post__wrapper}>
                    {postElements}
                </div>
            </div>
        </div>
    );
}

export default Page;