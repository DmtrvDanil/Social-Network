import React from "react";
import style from "./Dialog.module.css"

const Dialog = (props) => {
    return (
        <div className={style.wrapper}>
            <div className={style.user}>
                <img src="https://i1.sndcdn.com/avatars-000340984211-cjckx6-t500x500.jpg" alt="ava"
                     className={style.avatar}/>
                <div className={style.text}>
                    <p>
                        {props.name}
                    </p>
                    <p>
                        {props.message}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Dialog;