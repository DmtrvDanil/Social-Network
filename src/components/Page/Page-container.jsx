import React from "react";
import {addPostActionCreator, updateTextActionCreator} from "../../redux/page-reducer";
import Page from "./Page";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        postPage: state.postPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (postText) => {
            dispatch(addPostActionCreator(postText));
        },
        updateText: (message) => {
            dispatch(updateTextActionCreator(message));
        }
    }
}
const PageContainer = connect(mapStateToProps, mapDispatchToProps)(Page);

export default PageContainer;