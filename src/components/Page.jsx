import React from "react";
import './Page.css'
const Page = () => {
    return (
    <div className='page'>
        <div className='page__profile'>
            <div className='page__profile-user'>
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
            <h3 className='posts__heading'>
                My posts
            </h3>
            <textarea className='posts__textAdd'></textarea>
            <button className='posts__btn'>
                Send
            </button>
        </div>
    </div>
    );
}

export default Page;