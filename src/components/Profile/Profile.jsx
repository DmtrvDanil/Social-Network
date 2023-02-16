import React from "react";
import style from './Profile.module.css'
import Preloader from "../Preloader/Plreloader";


const Profile = (props) => {
    if (!props.profilePage.profilePage) return (<Preloader></Preloader>)
    else return (
        <div className={style.wrapper}>
            <div className={style.user}>
                <img
                    src={props.profilePage.profilePage.photos.large ?
                        props.profilePage.profilePage.photos.large :
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgIjrjdROcjrL6FDnNu5XqxYASXq8vKILM_w&usqp=CAU"}>
                </img>
                <p>
                    {props.profilePage.profilePage.fullName}
                </p>
                <p>
                    {props.profilePage.profilePage.lookingForAJobDescription}
                </p>
            </div>
        </div>
    );
}

export default Profile;