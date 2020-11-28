import React, { Component } from 'react';
import { Redirect } from "react-router";
import axios from 'axios';
import Headbar from "./Headbar";
import "./Post.css";

const postDelete = (id) => {
  axios.delete(`http://localhost:3000/api/posts/${id}`, {id})
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
      await axios.get(`http://localhost:3000/api/posts/${id}`, {id})
      .then(post => this.setState(post.data)); 
  }   
    
  render() {
    if (this.state.redir) {
      return <Redirect push to="/" />
    }  
    return (
      <div>
        <Headbar />  
        <div className="wrapperpost">
            <button
                    onClick= { () => {
                                       this.setState({redir: true})
                                       postDelete(this.state._id)
                                      }}
                    className = "delete"
                    type = "submit"
                    >               
            </button>
            <div>
              <b>Author:</b> {this.state.author}
            </div>
            <div>
              <b>Date:</b> {this.state.date}
            </div>
            <div>
              <b>Title:</b> {this.state.title}
            </div>
            <div>
              <b>Message:</b><br></br>
              <div className = "posttext">
                {this.state.content}
              </div>
            </div>
         </div>
         </div>
        )}
      
 }     

export default Post;
