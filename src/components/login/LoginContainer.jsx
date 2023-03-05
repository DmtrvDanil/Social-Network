import React from "react";
import {connect} from "react-redux"
import Login from "./Login";
import {loginAPI} from "../../api";



class LoginCont extends React.Component {
    componentDidMount() {
        loginAPI.login().then(response => {
            if (response.resultCode === 0) {

            }
        })
    }
    render() {
        return (
            <Login></Login>
        )
    }
}