import React, { Component } from 'react';
import { connect } from 'react-redux';
import { status as statusLogin } from './actions/auth';
import axios from 'axios';
import Posts from './Posts';
import { SERVER } from "./config/config";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      LogOn: false,
      user: '',
      login: '',
      password: '',
      status: ''
    };
  }
  loginTryOn = (log, pas) => {
    if (log === '' || pas === '') {
      this.setState({ status: 'Заполните все поля' })
    } else {
      axios.post(`${SERVER}/api/login/`, { log, pas })
        .then(dta => dta.data)
        .then(param => {
          this.setState({
            status: param.status,
            LogOn: param.LogOn,
            user: param.user
          });
          if (param.user) {
            localStorage.setItem('user', param.user)
          }
          setTimeout(() => {
            this.setState({ status: '' });
            this.props.status({ login: param.LogOn, user: param.user })
          }, 1500);
        });
    }
  }

  regTry = (log, pas) => {
    if (log === '' || pas === '') {
      this.setState({ status: 'Заполните все поля' })
    } else if (log.length > 10 || pas.length > 10) {
      this.setState({ status: 'Логин и пароль должны быть не длиннее 10 символов' })
    } else if (log.length < 3 || pas.length < 3) {
      this.setState({ status: 'Логин и пароль должны быть длиннее 3 символов' })
    } else {
      axios
        .post(`${SERVER}/api/register/`, { log, pas })
        .then(dta => {
          { }
          this.setState(dta.data);
          setTimeout(() => this.setState({ status: '' }), 2000);
        })
    }
  }
  componentDidMount() {
    const lbUser = localStorage.getItem('user');
    if (lbUser) {
      this.setState({ user: `${lbUser}`, LogOn: true });
      this.props.status({ login: true, user: lbUser });
    }
  }

  render() {
    const { loginOnOff } = this.props;
    const { username } = this.props;
    return (
      <div className="pole">
        { !loginOnOff ?
          <form className="login-div">
            <input
              className="login"
              name="login"
              maxLength="15"
              ref={ref => this.login = ref}
              type="text"
              placeholder="login"
              required />
            <button
              onClick={() => {
                const log = `${this.login.value}`
                const pas = `${this.password.value}`
                this.loginTryOn(log, pas)
              }}
              type="button"
              className="login-button"
            > login </button>
            <input
              className="password"
              name="password"
              maxLength="15"
              ref={ref => this.password = ref}
              type="password"
              placeholder="password"
              required />

            <button
              onClick={() => {
                const log = `${this.login.value}`
                const pas = `${this.password.value}`
                this.regTry(log, pas)
              }}
              type="button"
              className="reg-button"
            > register</button>
            <div className="status">{this.state.status}</div>
          </form> : <Posts />
        }
      </div>
    )
  }
}



const mapStateToProps = state => ({
  loginOnOff: state.auth.login,
  username: state.auth.user,
});

const mapDispatchToProps = dispatch => ({
  status: (stat) => dispatch(statusLogin(stat))
});


export default connect(mapStateToProps, mapDispatchToProps)(Home);