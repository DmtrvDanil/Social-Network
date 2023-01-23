import React from "react";
import Post from './Post/Post'
import style from './Page.module.css'
const Page = () => {
    return (
        <div className={style.page}>
            <div className='page__profile'>
                <div className={style.user}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgIjrjdROcjrL6FDnNu5XqxYASXq8vKILM_w&usqp=CAU">
                    </img>
                    <div>
                        <p className='user__name'>
                            Danil
                        </p>
                        <div className='user__info'>
                            <p className='user__info-item'>
                                Date: 2 May;
                            </p>
                            <p className='user__info-item'>
                                City: California
                            </p>
                        </div>
                    </div>
                </div>
            </div>
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
                    <Post name={'Danil'} age={21} message={"ya kringe"}></Post>
                    <Post name={'Tema'} age={25454} message={"lol transh"}></Post>
                    <Post name={'Maximum'} age={422} message={"jest kringe"}></Post>
                    <Post name={'Kringaterina'} age={7777777777} message={"kringe kapec"}></Post>
                </div>
            </div>
        </div>
    );
}

export default Page;