import React, { Component } from 'react';
import { connect } from 'react-redux';
import { status as statusLogin } from './actions/auth';
import { Link } from 'react-router-dom';
import Localbase from 'localbase';
import axios from 'axios';
import {SERVER} from "./config/config";
import "./Posts.css";

let db = new Localbase('blog');

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      id: '',
      LogOn: false,
      user: '',
      login: '',
      password: '',
      status: '',
      author: ''
    };
    //this.regTry = this.regTry.bind(this);
    this.postDelete = this.postDelete.bind(this);
  }

  postDelete = (id) => {//это при рендере???
    axios.delete(`${SERVER}/post/${id}`, { id });
    if (this.state.posts.length >= 0) {
      const oldposts = this.state.posts;
      const newposts = oldposts.filter(i => i._id !== id);
      this.setState({ posts: newposts });
    }
  }

  /*loginTryOn = (log, pas) => {
    if (log === '' || pas === '') {
      this.setState({ status: 'Заполните все поля' })
    }else {
      axios.get(`${SERVER}/api/login/`, { headers: { log: log, pas: pas } })
      .then(dta => dta.data)
      .then(param => {
          this.setState(param);
          setTimeout(() => this.setState({ status: '' }), 2000);
          this.props.status({ login: param.LogOn, user: param.user });
          console.log("login удачный, в редаксе: ", this.props.username )
      })
    }
  }

  regTry = (log, pas) => {
    if (log === '' || pas === '') {
      this.setState({ status: 'Заполните все поля' })
    } else if (log.length > 10 || pas.length > 10) {
      this.setState({ status: 'Логин и пароль должны быть не длиннее 10 символов' })
    } else {
      axios.post(`${SERVER}/api/login/`, { log, pas })
        .then(dta => {
          this.setState(dta.data);
          setTimeout(() => this.setState({ status: '' }), 2000);
        })
    }
  }*/

  componentDidMount() {
    console.log('в постс');
    if (this.state.posts.length >= 0) {
      axios.get(`${SERVER}/posts/${this.props.username}`)
        .then(res => res.data)
        .then(posts => {
          this.setState({ posts })
        }
        );
    }
  }

  render() {
    const { loginOnOff } = this.props;
    const { username } = this.props;
    return (
      <div className="pole">
        { loginOnOff ?
        <div className="Posts" >
        {this.state.posts.slice(0).reverse().map(post =>
          <div key={post.id} className="wrapper-posts">
            <div className="nameplate-posts-div">
              <div className="nameplate-posts">
                <b>Date:</b> &nbsp; {post.date}
              </div>
              <div className="nameplate-posts">
                <b>Titile:</b> &nbsp; {post.title}
              </div>
            </div>
            <div className="text-pole-posts">
              {post.content}
            </div>
            <div className="button-div">
              <button
                onClick={() => { this.postDelete(post._id) }}
                className="delete-posts"
                type="submit"
              > delete
            </button>
              <Link to={{
                pathname: `post/${post._id}`,
                state: { id: post._id }
              }} className="detail-posts" > detail </ Link>
            </div>
          </div>
        )}
      </div>:
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
      </form>
          
  }
          
        
      </div>
    );

  };

}

const mapStateToProps = state => ({
  loginOnOff: state.auth.login,
  username: state.auth.user,
});

const mapDispatchToProps = dispatch => ({
  status: (stat) => dispatch(statusLogin(stat))
});


export default connect(mapStateToProps, mapDispatchToProps)(Posts);