import React from "react";


export class Status extends React.Component {
    state = {
        editMode: false,
        statusText: this.props.statusText
    }

    editStatusClick() {
        this.setState({
            editMode: true
        })
    }

    // onChangeStatus() {
    //     let statusText = statusRef.current.value;
    //     this.setState({
    //         statusText
    //     })
    // }

    onStatusSave() {
        this.setState({
            editMode: false
        })
        this.props.updateStatus();
    }

    onStatusChange = (e) => {
        this.setState({
            statusText: e.currentTarget.value
        })
    }

    render() {
        if (!this.state.editMode) {
            return (
                <div>
                    <div onDoubleClick={this.editStatusClick.bind(this)}>
                    <span>
                        {this.props.statusText}
                    </span>
                    </div>
                </div>
            )
        }
        return (
            <div>
                <input type="text" onChange={this.onStatusChange}
                       value={this.state.statusText}/>
                <button onClick={this.onStatusSave.bind(this)}>
                    Save your status
                </button>
            </div>
        )
    }
}