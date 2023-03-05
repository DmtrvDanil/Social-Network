import React from "react";
import Dialog from "./Dialog";
import {sendMessageActionCreator} from "../../../redux/dialogs-reducer";
import Dialogs from "../Dialogs";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import {withAuthNavigate} from "../../hoc/hoc";

let mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (message) => {
            dispatch(sendMessageActionCreator(message));
        }
    }
}

let mapStateToPropsNavigate = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}



let authHocDialog = withAuthNavigate(Dialogs);
authHocDialog = connect(mapStateToPropsNavigate)(authHocDialog);

//     (props) => {
//     if(!props.isAuth) return <Navigate to={"/login"}/>
//     else return <Dialogs {...props}/>
// }

// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(authHocDialog)
export default DialogsContainer;