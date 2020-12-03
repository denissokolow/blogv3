import React, { Component } from 'react';
import { Redirect } from "react-router";
import axios from 'axios';
import "./Login.css";


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
                      logOn: false,
                      user:'',
                      login: '',
                      password:'',
                      status:''
                    };
                    this.regTry = this.regTry.bind(this);
                }
    loginTryOn = (log, pas) =>{
        axios.get('http://localhost:3001/api/login/', {params:{log: log, pas:pas}})
        .then(dta => dta.data)
        .then(param => this.setState(param))
        }

    regTry = (log, pas) => {
        axios.post(`http://localhost:3001/api/login/`, { log, pas })
        .then(dta => {
                       this.setState(dta.data);
                       setTimeout(()=>this.setState({status:''}), 2000);
            }   
        )}
    
    render() {  
        return (
        <div className="back-login">
        {!this.state.logOn ?
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
                        this.loginTryOn(log, pas)
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
                        this.regTry(log,pas)
                    }} 
                    type="button" 
                    className="reg-button"
                    > register</button>
                <div className="status">{this.state.status}</div>
            </div>
            : <div className="userplate"> 
                    {this.state.user}
                    Logout 
                    </div>
         }
        </div>
        );
    }
}

export default Login;


