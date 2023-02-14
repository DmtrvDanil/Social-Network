import React from "react";
import style from './Header.module.css'
import {connect} from "react-redux";
import Header from "./Header";
import axios from "axios";
import {setAuthAC} from "../../redux/auth-reducer";



class HeaderCont extends React.Component{
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,  {withCredentials: true}).then(response => {
            if (response.data.resultCode === 0) {
                // debugger;
                let {id, login, email} = response.data.data;
                this.props.setAuth(id, email, login);
            }
        })
    }
    render() {
        return (
            <Header {...this.props}></Header>
        );
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        setAuth: (id, email, login) => {
            dispatch(setAuthAC(id, email, login));
        }
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}


const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderCont);

export default HeaderContainer;