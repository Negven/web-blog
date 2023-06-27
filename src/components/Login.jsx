import React, {useContext} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";
import {AuthContext} from "../context/context";
import {redirect, useNavigate} from "react-router-dom";

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const navigate = useNavigate();
    function login(event) {
        event.preventDefault();
        setIsAuth(true);
        navigate('/posts')
        localStorage.setItem('auth', 'true');
    }

    return (
        <div>
            <form onSubmit={login}>
                <h1>Enter any information in the fields</h1>
                <MyInput placeholder={'Name'}/>
                <MyInput placeholder={'Password'} type={"password"}/>
                <MyButton>Login</MyButton>
            </form>
        </div>
    );
};

export default Login;