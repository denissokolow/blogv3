import React, { Component } from 'react';
import { connect } from 'react-redux';
import { status as statusLogin} from './actions/auth';
import { Redirect } from "react-router";
import axios from 'axios';
import "./Login.css";


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
                      LogOn: false,
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
        .then(param => {
                        this.setState(param);
                        console.log('передаем параметр', param.LogOn);
                        this.props.status(param.LogOn);
        })
    }
    
    regTry = (log, pas) => {
        axios.post(`http://localhost:3001/api/login/`, { log, pas })
        .then(dta => {
                       this.setState(dta.data);
                       setTimeout(()=>this.setState({status:''}), 2000);
            }   
        )}
    
    render() {  
        const { loginOnOff } = this.props;
        console.log('статус логинонофф', loginOnOff);
        return (
        <div className="back-login">
        { !this.state.LogOn ?
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

const mapStateToProps = state => ({
    loginOnOff: state.auth.login,
});

const mapDispatchToProps  = dispatch => ({
    status: (stat) => dispatch(statusLogin(stat))
});


export default connect (mapStateToProps, mapDispatchToProps)(Login);


