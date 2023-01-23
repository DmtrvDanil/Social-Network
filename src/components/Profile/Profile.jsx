import React from "react";
import style from './Profile.module.css'

const Profile = () => {
    return (
        <div className={style.wrapper}>
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
    );
}

export default Profile;