import React from "react";

let statusRef = React.createRef();

export class Status extends React.Component {
    state = {
        editMode: false,
        statusText: 'Hello, its status',
    }

    editStatusClick() {
        this.setState({
            editMode: true
        })
    }

    onChangeStatus() {
        let statusText = statusRef.current.value;
        this.setState({
            statusText
        })
    }

    onStatusSave() {
        let statusText = statusRef.current.value;
        this.setState({
            statusText,
            editMode: false
        })
    }

    render() {
        if (!this.state.editMode) {
            return (
                <div>
                    <div onDoubleClick={this.editStatusClick.bind(this)}>
                    <span>
                        {this.state.statusText}
                    </span>
                    </div>
                </div>
            )
        }
        return (
            <div>
                <input type="text" ref={statusRef}
                       value={this.state.statusText}
                       onChange={this.onChangeStatus.bind(this)}/>
                <button onClick={this.onStatusSave.bind(this)}>
                    Save your status
                </button>
            </div>
        )
    }
}