import React from "react";
import style from './Header.module.css'
const Header = (props) => {
    debugger;
    return (
        <header className={style.header}>
            <img className={style.icon} src="https://cdn-icons-png.flaticon.com/512/263/263080.png">
            </img>
            <p>{props.login}</p>
        </header>
    );
}

export default Header;