import React from "react";
import {addPostActionCreator, deletePostAC, updateTextActionCreator} from "../../redux/page-reducer";
import Page from "./Page";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    console.log(state);
    return {
        postPage: state.postPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (postText) => {
            dispatch(addPostActionCreator(postText));
        },
        deletePost: (id) => {
            dispatch(deletePostAC(id));
        }
    }
}
const PageContainer = connect(mapStateToProps, mapDispatchToProps)(Page);

export default PageContainer;