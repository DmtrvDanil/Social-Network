import React from "react";
import style from './Profile.module.css'
import {Navigate} from "react-router-dom";
import Preloader from "../Preloader/Plreloader";
import {Status} from "./status";
import StatusWithHook from "./statusWithHook";

const Profile = (props) => {
    if (!props.profilePage.profilePage) return (
        <div>
            <h1>
                hello
            </h1>
            <StatusWithHook statusText={props.statusTex} updateStatus={props.updateStatus}></StatusWithHook>
        </div>
)
    else
    return (
        <div className={style.wrapper}>
            <div className={style.user}>
                <h1>
                    {props.status}
                </h1>
                <img
                    src={props.profilePage.profilePage.photos.large ?
                        props.profilePage.profilePage.photos.large :
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgIjrjdROcjrL6FDnNu5XqxYASXq8vKILM_w&usqp=CAU"}>
                </img>
                <p>
                    {props.profilePage.profilePage.fullName ? props.profilePage.profilePage.fullName : "Danil"}
                </p>
                <p>
                    {props.profilePage.profilePage.lookingForAJobDescription ? props.profilePage.profilePage.lookingForAJobDescription : "Google"}
                </p>
            </div>
        </div>
    );
}

export default Profile;