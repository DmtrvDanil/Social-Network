import React from "react";
import style from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    let dialogElements = props.dialogData.map((dialog) => {
        return (
            <Dialog message={dialog.message} name={dialog.name}></Dialog>
        )
    })

    return (
        <div className={style.wrapper}>
            <div className={style.dialogs__list}>
                <NavLink to='/dialogs/1'>Vitya</NavLink>
                <NavLink to='/dialogs/2'>Max</NavLink>
                <NavLink to='/dialogs/3'>Tema</NavLink>
            </div>
            <div className={style.chat__wrapper}>
                {dialogElements}
            </div>
        </div>
    );
}

export default Dialogs;