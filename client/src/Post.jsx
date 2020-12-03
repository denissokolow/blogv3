import React, { Component } from 'react';
import { Redirect } from "react-router";
import axios from 'axios';
import Headbar from "./Headbar";
import "./Post.css";

const postDelete = (id) => {
  axios.delete(`http://localhost:3001/api/posts/${id}`, {id})
}    
    
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
  }
  componentDidMount() {
    this.renderPost();
  }
  
  renderPost = async() => {
      const id = this.props.location.state.id;
      await axios.get(`http://localhost:3001/api/posts/${id}`, {id})
      .then(post => this.setState(post.data)); 
  }   
    
  render() {
    if (this.state.redir) {
      return <Redirect push to="/" />
    }  
    return (
      <div>
        <Headbar />  
        <div className = "wrapper-post">
            <div className = "nameplate-post">
              <b>Author:</b> &nbsp; {this.state.author}
            </div>
            <div className = "nameplate-post">
              <b>Date:</b> &nbsp; {this.state.date}
            </div>
            <div className = "nameplate-post">
              <b>Title:</b> &nbsp; {this.state.title}
            </div>
            <div className = "post-text-pole">
                {this.state.content}
            </div>
            <button
                    onClick= { () => {
                                       this.setState({redir: true})
                                       postDelete(this.state._id)
                                      }}
                    className = "delete-post"
                    type = "submit"
                    > delete               
            </button>
         </div>
         </div>
        )}
      
 }     

export default Post;
