import React from "react";
import {profileAPI} from "../../api";


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

    onStatusSave = () => {
        this.setState({
            editMode: false
        })
        console.log(this.state.statusText);
        // this.props.updateStatus(this.state.statusText);
    }

    onStatusChange = (e) => {
        this.setState({
            statusText: e.currentTarget.value
        });
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.statusText !== this.props.statusText) {
            this.setState({
                statusTExt: this.props.statusText
            });
        }
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
                <input type="text" onChange={this.onStatusChange}
                       value={this.state.statusText}/>
                <button onClick={this.onStatusSave}>
                    Save your status
                </button>
            </div>
        )
    }
}