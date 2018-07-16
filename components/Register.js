import React from 'react';
import '../scss/Login.scss'
import '../scss/Register.scss'
import { NavLink } from 'react-router-dom';
import Label from './form-components/Label';
import Input from './form-components/Input';

const Register = () => {
    return (
        <div className="login-wrapper">
             <h1 className="login-wrapper__title">Please complete the form below to register.</h1>
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
                    <label forvalue="name" className="form__label">Name</label>
                    <Input type="text" value="name" classvalue="form__input"/>

                  <Label forvalue="email" value="Email" />
                  <Input type="email" value="email" classvalue="form__input"/>

                    <Label forvalue="username" value="Username" />
                    <Input type="text" value="username" classvalue="form__input"/>
                    <Label forvalue="password" value="Password" />
                    <Input type="password" value="password" classvalue="form__input" />
                    
                    <Input type="submit" value="Register" classvalue="form__button"/>
                </form>
            </div>
        </div>
    )
}

export default Register;