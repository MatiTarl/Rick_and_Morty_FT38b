import React from 'react';
import SearchBar from "../SearchBar/SearchBar";
import { NavLink, useLocation } from 'react-router-dom';
import style from "./Nav.module.css"
export default function Nav ({onSearch}) {
    
    const location = useLocation();

    return(
    <div className={style.div}>
        <div className={style.divBotones} >
        <NavLink to={"/home"}  >
            <button className={style.Home} >Home</button>
        </NavLink>
        <NavLink to={"/about"} >
            <button className={style.About} >About</button>
        </NavLink>
        <NavLink to={"/favorites"} >
            <button className={style.About} >Favorites</button>
        </NavLink>
        </div>
        <div className={style.divSearchbar} >
        {location.pathname === "/home" ? <SearchBar onSearch={onSearch}/> : null}
        </div>
     </div>
    );
}