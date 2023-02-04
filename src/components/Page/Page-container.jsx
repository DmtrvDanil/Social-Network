import React from "react";
import {addPostActionCreator, updateTextActionCreator} from "../../redux/page-reducer";
import Page from "./Page";

const PageContainer = (props) => {
    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }
    let updateText = (message) => {
       props.dispatch(updateTextActionCreator(message));
    }

    return (
        <Page addPost={addPost} updateText={updateText} postPage={props.store.postPage}></Page>
    );
}

export default PageContainer;