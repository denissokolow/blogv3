import React, { Component } from 'react';
import { Redirect } from "react-router";
import { connect } from 'react-redux';
import axios from 'axios';
import Headbar from "./Headbar";
import {SERVER} from "./config/config"
import "./Post.css";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
                  redir: false,
                  author:'',
                  date:'',
                  title:'',
                  content:''
                };
  this.postDelete = this.postDelete.bind(this);
  }
  componentDidMount() {
    this.renderPost();
  }

  postDelete = (id) => {
    this.setState({redir: true});
    axios.delete(`${SERVER}/api/post/${id}`, { id });
    }
  
  renderPost = async() => {
      console.log(this.props.location.state.id);
      const id = this.props.location.state.id;
      await axios.get(`${SERVER}/api/post/${id}`, {id})
      .then(post => this.setState(post.data)); 
  }
  
  componentDidUpdate() {
    if (this.state.redir) {
      axios.get(`${SERVER}/api/posts/${this.props.username}`)
      .then(res => res.data)
      .then(posts => this.setState({ posts }));
    }
  }
    
  render() {
    const { username } = this.props;
    if (this.state.redir) { return <Redirect push to="/" /> }  
    return (
      <div>
        <Headbar />  
        <div className = "wrapper-post">
          <div className = "nameplate-post-div">
            <div className = "nameplate-post">
              <b>Date:</b> &nbsp; {this.state.date}
            </div>
            <div className = "nameplate-post">
              <b>Title:</b> &nbsp; {this.state.title}
            </div>
            </div>
            <div className = "post-text-pole">
                {this.state.content}
            </div>
            <button
                    onClick= { () => {this.postDelete(this.state._id)}}
                    className = "delete-post"
                    type = "submit"
                    > delete               
            </button>
         </div>
         </div>
        )}
      
 }     

 const mapStateToProps = state => ({
  username: state.auth.user,
});

export default connect (mapStateToProps)(Post);
