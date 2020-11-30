import React, { Component } from 'react';
import { Redirect } from "react-router";
import axios from 'axios';
import "./Login.css";

 //принимаем и передаем логин и пароль на /api/login, проверяем его на пустоту, возвращаем logOn тру или фолс
const loginTryOn = (log, pas) =>{
     console.log("GET получил логин и пароль из инпутов", "логин: ",log, "пароль:", pas)
     axios.get('http://localhost:3001/api/login/', {params:{log: log, pas:pas}})
    }
           
    
//принимаем и передаем логин и пароль, проверяем на пустоту, сверяем с базой, возвращаем удачную регистрацию или дубль
const regTry = (log, pas) =>{
    console.log("POST получил логин и пароль из инпутов", "логин: ",log, "пароль:", pas)
    axios.post(`http://localhost:3001/api/login/`, {log, pas})
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
        <div className="back-login">
        {this.state.logOn ?
            <div className="login-div">
                <input
                    className="login"
                    ref={ref => this.login = ref}
                    type="text"
                    placeholder="login" />
                <button 
                    onClick= { () => {
                        const log= `${this.login.value}`
                        const pas= `${this.password.value}`
                        loginTryOn(log, pas)
                    }}
                    type="button" 
                    className="login-button"
                    > login </button>

                <input
                    className="password"
                    ref={ref => this.password = ref}
                    type="password"
                    placeholder="password" />

                <button
                    onClick= { () => {
                        const log= `${this.login.value}`
                        const pas= `${this.password.value}`
                        regTry(log,pas)
                    }} //передаем логин и пароль для регистрации
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


