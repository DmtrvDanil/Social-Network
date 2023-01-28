import state, {addPost, updateText, updateMessageText} from "./redux/state";
import React from "react";
import App from "./App";
import ReactDOM from "react-dom/client";



export let renderTree = (state) => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
            {/*<App postsData={postsData} dialogData={dialogData}/>*/}
            <App state={state} addPost={addPost} updateText={updateText} updateMessageText={updateMessageText}/>
        </React.StrictMode>
    );
}