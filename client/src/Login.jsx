import React, { Component } from 'react';
import { connect } from 'react-redux';
import { status as statusLogin } from './actions/auth';
import "./Login.css";


class Login extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            LogOn: false,
            user: '',
            login: '',
            password: '',
            status: ''
        };
    }
    logOut = () => {
        this.setState({ LogOn: false, user: '', status: '' });
        this.props.status({ login: false, user: '' })
        localStorage.clear()
    }

    render() {
        const { loginOnOff } = this.props;
        const { username } = this.props;
        return (
            <div className="back-login">
                { loginOnOff ?
                    <div className="userplate">
                        <div className="userplate-name">{username}</div>
                        <button className="userplate-btn"
                            onClick={() => this.logOut()}
                        >logout</button>
                    </div> : null
                }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loginOnOff: state.auth.login,
    username: state.auth.user,
});

const mapDispatchToProps = dispatch => ({
    status: (stat) => dispatch(statusLogin(stat))
});


export default connect(mapStateToProps, mapDispatchToProps)(Login);


