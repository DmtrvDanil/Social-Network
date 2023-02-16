import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {setAuthAC} from "../../redux/auth-reducer";
import {headerAPI} from "../../api";



class HeaderCont extends React.Component{
    componentDidMount() {
            headerAPI.getAuth().then(response => {
            if (response.resultCode === 0) {
                let {id, login, email} = response.data;
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