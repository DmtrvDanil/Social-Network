import React, {useState} from "react";


const StatusWithHook = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [statusText, setStatus] = useState(props.statusText);
    const onStatusDblClick = () => {
        setEditMode(true);
    }
    const deactivateEditMode = () => {
        setEditMode(false);
        setStatus(statusText);
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
                <input type={"text"} onBlur={deactivateEditMode} onChange={onStatusChange}/>
                <button >
                    Save your status
                </button>
            </div>
        )
    // }
}

export default StatusWithHook;