import React from "react";
import {Field} from "redux-form";

const LoginForm = (props) => {
    return (
        <form>
            <Field placeholder={"Login"}/>
        </form>
    )
}

const Login = (props) => {
    return (
        <div>
            <h1>Login page</h1>
            <LoginForm></LoginForm>
        </div>
    )
}

export default Login;