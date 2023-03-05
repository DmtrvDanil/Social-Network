import React from "react";
import style from './Dialogs.module.css'
import {Navigate, NavLink} from "react-router-dom";
import Dialog from "./Dialog/Dialog";
import {ErrorMessage, Field, Form, Formik} from "formik";

const Dialogs = (props) => {
    let dialogElements = props.dialogPage.dialogData.map((dialog) => {
        return (
            <Dialog message={dialog.message} name={dialog.name}></Dialog>
        )
    })

    let onSendMessage = (message) => {
        props.sendMessage(message);
    }
    return (
        <div className={style.wrapper}>
            <Massage onSendMessage={onSendMessage}></Massage>

            <div className={style.dialogs__list}>
                <NavLink to='/dialogs/1'>Vitya</NavLink>
                <NavLink to='/dialogs/2'>Max</NavLink>
                <NavLink to='/dialogs/3'>Tema</NavLink>
            </div>
            <div className={style.chat__wrapper}>
                {dialogElements}
            </div>
        </div>
    );
}

const Massage = (props) => (
    <div>
        <Formik
            initialValues={{ message: '' }}
            onSubmit={(values, { setSubmitting }) => {
                props.onSendMessage(values.message);
        }}>
            {({ isSubmitting }) => (
                <Form>
                    <Field type="text" name="message" />
                    <button type="submit">
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
    </div>
);

export default Dialogs;