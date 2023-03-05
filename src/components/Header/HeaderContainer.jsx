import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {authThunkCreator, loginThunkCreator, logoutThunkCreator, setAuth} from "../../redux/auth-reducer";
import {authAPI} from "../../api";



class HeaderCont extends React.Component{
    componentDidMount() {

            authAPI.getAuth().then(response => {
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



const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}


const HeaderContainer = connect(mapStateToProps, {setAuth, authThunkCreator, logoutThunkCreator})(HeaderCont);

export default HeaderContainer;