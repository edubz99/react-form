import React from 'react';
import '../scss/Login.scss'
import { NavLink } from 'react-router-dom';
import Label from './form-components/Label';
import Input from './form-components/Input';



const Login = () => {
    return (
        <div className="login-wrapper">
             <h1 className="login-wrapper__title">Welcome! Log in using your accound details.</h1>
            <div className="form-container">
                <ul className="list">
                <NavLink className="list__link" exact to="/" activeStyle={{background: '#f13252',color: '#ccc6c6'}}>
                   <li>Login</li>
                </NavLink>

                <NavLink className="list__link" exact to="/register" activeStyle={{background: '#f13252',color: '#ccc6c6'}}>
                   <li>Register</li>
                </NavLink>
                </ul>

                <form className="form">
                    <Label forvalue="username" value="Username" />
                   <Input type="text" value="username" classvalue="form__input"/>
                    <Label forvalue="password" value="Password" classvalue="form__input"/>
                    <Input type="password" value="password" classvalue="form__input"/>

                    <a href="/" className="form__link">Forgot Password?</a>
                    <Input type="submit" value="Login" classvalue="form__button"/>
                </form>
            </div>
        </div>
    )
}

export default Login;