import React, { Component } from 'react';
import { connect } from 'react-redux';
import { status as statusLogin } from './actions/auth';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {SERVER} from "./config/config";
import "./Posts.css";

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
    this.postDelete = this.postDelete.bind(this);
  }

  postDelete = (id) => {
    axios.delete(`${SERVER}/post/${id}`, { id });
    setTimeout(() => {
    axios.get(`${SERVER}/posts/${this.props.username}`)
        .then(res => res.data)
        .then(posts => {
          console.log("del update posts from server ", posts)  
          this.setState({ posts })
          localStorage.setItem('posts', `${JSON.stringify(this.state.posts)}`)
          })
      }, 100);
  }

  componentDidUpdate() {
    //console.log('в posts update');
    //const lbPosts = JSON.parse(localStorage.getItem('posts'));
    //console.log("длина стейта ", this.state.posts.length,"длина локалбеза ", lbPosts.length);
    axios.get(`${SERVER}/posts/${this.props.username}`)
        .then(res => res.data)
        .then(posts => {
          if (posts.length > this.state.posts.length){
          console.log("update posts from server")  
          this.setState({ posts })
          localStorage.setItem('posts', `${JSON.stringify(this.state.posts)}`)
          //console.log("длина стейта ", this.state.posts.length,"длина локалбеза ", lbPosts.length);
          }
      })
    }
  componentDidMount() {
    console.log('в posts mount');
    //const lbPosts = JSON.parse(localStorage.getItem('posts'));
    /*if (lbPosts){
      console.log("download posts from lb")
      this.setState({ "posts": lbPosts })
    }else*/ 
    if (this.state.posts.length >= 0) {
      axios.get(`${SERVER}/posts/${this.props.username}`)
        .then(res => res.data)
        .then(posts => {
          this.setState({ posts })
          localStorage.setItem('posts', `${JSON.stringify(this.state.posts)}`)
        }
        );
    }
  }

  render() {
    const { loginOnOff } = this.props;
    const { username } = this.props;
    return (
      <div className="pole">
        <div className="Posts" >
        {this.state.posts.slice(0).reverse().map(post =>
          <div key={post._id} className="wrapper-posts">
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
      </div>
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