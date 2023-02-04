import React from "react";
import Dialog from "./Dialog";
import {sendMessageActionCreator, updateMessageTextActionCreator} from "../../../redux/dialogs-reducer";
import Dialogs from "../Dialogs";

const DialogsContainer = (props) => {
    let updateMessageText = (message) => {
        props.dispatch(updateMessageTextActionCreator(message));
    }

    let sendMessage = () => {
        props.dispatch(sendMessageActionCreator());
    }
    return (
        <Dialogs updateMessageText={updateMessageText} sendMessage={sendMessage} dialogPage={props.store.dialogPage}></Dialogs>
    )
}

export default DialogsContainer;