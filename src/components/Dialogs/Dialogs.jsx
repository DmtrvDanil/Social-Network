import React from "react";
import style from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import Dialog from "./Dialog/Dialog";

const Dialogs = (props) => {
    let dialogElements = props.dialogPage.dialogData.map((dialog) => {
        return (
            <Dialog message={dialog.message} name={dialog.name}></Dialog>
        )
    })

    let textMessage = React.createRef();

    let onUpdateMessageText = () => {
        let message = textMessage.current.value;
        props.updateMessageText(message);
    }

    let onSendMessage = () => {
        props.sendMessage();
    }
    return (
        <div className={style.wrapper}>
            <textarea ref={textMessage} onChange={onUpdateMessageText} value={props.dialogPage.messageText}></textarea>
            <div className={style.dialogs__list}>
                <NavLink to='/dialogs/1'>Vitya</NavLink>
                <NavLink to='/dialogs/2'>Max</NavLink>
                <NavLink to='/dialogs/3'>Tema</NavLink>
            </div>
            <button onClick={onSendMessage}>
                Send message
            </button>
            <div className={style.chat__wrapper}>
                {dialogElements}
            </div>
        </div>
    );
}

export default Dialogs;