import React, { Component } from 'react';
import { Redirect } from "react-router";
import axios from 'axios';
import "./Login.css";

 //принимаем и передаем логин и пароль на /api/login, проверяем его на пустоту, возвращаем logOn тру или фолс
const loginTryOn = (log, pas) =>{
     console.log("получили логин и пароль из инпутов", log, pas)
     axios.get(`http://localhost:3001/api/login`, { params: {login: log, password: pas}})
    }

//принимаем и передаем логин и пароль, проверяем на пустоту, сверяем с базой, возвращаем удачную регистрацию или дубль
const regTry = () => {
    
}

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
                      logOn: true,
                      user:'',
                      login: '',
                      password:''
                    };
        }
                   

   
    render() {  
        return (
        <div>
        {this.state.logOn ?
            <div className="login-div">
                <input
                    className="login"
                    ref={ref => this.login = ref}
                    type="text"
                    placeholder="login" />
                <button 
                    onClick= { () => loginTryOn(`${this.login.value}, ${this.password.value}`)} //передаем логин и пароль для авторизации
                    type="button" 
                    className="login-button"
                    > login </button>

                <input
                    className="password"
                    ref={ref => this.password = ref}
                    type="password"
                    placeholder="password" />

                <button
                    onClick= { () => regTry()} //передаем логин и пароль для регистрации
                    type="button" 
                    className="reg-button"
                    > register</button>
                <div>status</div>
            </div>
            : <div> UserName </div>
         }
        </div>
        );
    }
}

export default Login;

//this.setState({
    // logOn : !this.state.logOn
 //})