import React from "react";
import style from './Header.module.css'
const Header = () => {
    return (
        <header className={style.header}>
            <img className={style.icon} src="https://cdn-icons-png.flaticon.com/512/263/263080.png">
            </img>
        </header>
    );
}

export default Header;