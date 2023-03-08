import React, {useEffect, useState} from "react";
import {profileAPI} from "../../api";


const StatusWithHook = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [statusText, setStatus] = useState(props.statusText);

    useEffect(() => {
        setStatus(props.statusText);
    }, [props.statusText]);

    const onStatusDblClick = () => {
        setEditMode(true);
    }
    const deactivateEditMode = () => {
        setEditMode(false);
        setStatus(statusText);
        props.updateStatus(statusText);


        profileAPI.updateStatus(statusText).then(response => {
            profileAPI.getStatus(24313).then(response => {
                // getStatus(response);
                console.log(response);
            });

        });

    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }
        if (!editMode) {
            return (
                <div>
                    <div onClick={onStatusDblClick}>
                    <span>
                        {statusText}
                    </span>
                    </div>
                </div>
            )
        }
        return (
            <div>
                <input type={"text"} onBlur={deactivateEditMode} onChange={onStatusChange} placeholder={statusText}/>
                <button >
                    Save your status
                </button>
            </div>
        )
    // }
}

export default StatusWithHook;