import React from "react";
import style from './Profile.module.css'

const Profile = (props) => {
    return (
        <div className={style.wrapper}>
            <div className={style.user}>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgIjrjdROcjrL6FDnNu5XqxYASXq8vKILM_w&usqp=CAU">
                </img>
                <div>
                    <p className='user__name'>
                        {props.name}
                    </p>
                    <div className='user__info'>
                        <p className='user__info-item'>
                            {props.date}
                        </p>
                        <p className='user__info-item'>
                            {props.city}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;