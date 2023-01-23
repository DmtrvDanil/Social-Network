import React from "react";
import style from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.dialogs__list}>
                <NavLink to='/dialogs/1'>Vitya</NavLink>
                <NavLink to='/dialogs/2'>Max</NavLink>
                <NavLink to='/dialogs/3'>Tema</NavLink>
            </div>
            <Dialog></Dialog>
        </div>
    );
}

export default Dialogs;