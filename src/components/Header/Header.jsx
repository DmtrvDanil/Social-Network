import React from "react";
import style from './Header.module.css'
import {NavLink} from "react-router-dom";
const Header = (props) => {
    let logout = () => {
        props.logoutThunkCreator(null, null, null);
    }
    return (
        <header className={style.header}>
            <img className={style.icon} src="https://cdn-icons-png.flaticon.com/512/263/263080.png">
            </img>
            <p>{props.login ? props.login : "--"}</p>
            <button onClick={logout}>
                logout
            </button>
            <button>
                <NavLink to={'/login'}>
                    login
                </NavLink>
            </button>
        </header>
    );
}

export default Header;