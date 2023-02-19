import React from "react";
import Dialog from "./Dialog";
import {sendMessageActionCreator, updateMessageTextActionCreator} from "../../../redux/dialogs-reducer";
import Dialogs from "../Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateMessageText: (message) => {
            dispatch(updateMessageTextActionCreator(message));
        },
        sendMessage: () => {
            dispatch(sendMessageActionCreator());
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
export default DialogsContainer;