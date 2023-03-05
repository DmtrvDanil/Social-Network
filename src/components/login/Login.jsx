import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {connect} from "react-redux";
import {loginThunkCreator, logoutThunkCreator} from "../../redux/auth-reducer";




let Login = (props) => (
    <div>
        <h1>Any place in your app!</h1>
        <Formik
            initialValues={{ email: '', password: '' }}
            validate={values => {
                const errors = {};
                if (!values.email) {
                    errors.email = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {

                props.loginThunkCreator(values.email, values.password);
            }}
        >
            {({ isSubmitting }) => (
                <Form>
                    <Field type="email" name="email" />
                    <ErrorMessage name="email" component="div" />
                    <Field type="password" name="password" />
                    <ErrorMessage name="password" component="div" />
                    <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
    </div>
);

const mapStateToProps = (state) => ({
    isAuth: state.auth
})

export default connect(null, {loginThunkCreator, logoutThunkCreator})(Login);
// export default Login;

