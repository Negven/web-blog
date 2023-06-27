import React, {useContext} from 'react';
import {Link, useNavigate} from "react-router-dom";
import classes from "./Header.module.css";
import {AuthContext} from "../../../context/context";
import MyButton from "../button/MyButton";

const Header = ({menuItems}) => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const navigate = useNavigate();
    function logOut(){
        setIsAuth(false);
        navigate('/login');
        localStorage.removeItem('auth');
    }
    return (
        <header>
            <nav>
                {isAuth && <MyButton onClick={logOut}>Log out</MyButton>}
                <ul className={classes.menu}>
                    {menuItems.filter(menuItems => menuItems.name).map((menuItem, index) => (
                        <li key={'menuItem' + index} className={classes.menu__item}>
                            <Link to={menuItem.path}>
                                {menuItem.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;