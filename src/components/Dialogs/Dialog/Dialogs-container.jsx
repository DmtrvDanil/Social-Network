import React from "react";
import Dialog from "./Dialog";
import {sendMessageActionCreator, updateMessageTextActionCreator} from "../../../redux/dialogs-reducer";
import Dialogs from "../Dialogs";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import {withAuthNavigate} from "../../hoc/hoc";

let mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage,
        // isAuth: state.auth.isAuth
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