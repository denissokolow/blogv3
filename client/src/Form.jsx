import React, { Component } from "react";  
import axios from "axios";
import { Redirect } from "react-router";
import { connect } from 'react-redux';
import Headbar from "./Headbar";
import "./Form.css";

class addForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
                  validate: false,
                  author: '',
                  date: '',
                  title: '',
                  content: ''
                };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
       [event.target.name]: event.target.value
      });
  }

  handleSubmit(event) {
    event.preventDefault();
    axios.post('http://localhost:3001/api/posts',{
      author: this.state.author,
      date: `${(new Date()).toLocaleTimeString() + ", " + (new Date()).toLocaleDateString()}`,
      title: this.state.title,
      content: this.state.content,
     });
     this.setState ({   
      author: '',
      date: '',
      title:'',
      content: '',
      validate: true
     });
  }
  
  render() {  
    if (this.state.validate) {
      return <Redirect push to="/" />
    }
    const { username } = this.props;
    this.state.author =  username;
    return (
      <div> 
        <Headbar />  
        <form className="form" onSubmit={this.handleSubmit}>
          <div className = "author-div"> 
               { username }
         </div>
          {/*<input 
                 className= "forminput"
                 name="author"
                 type="text" 
                 value={this.state.author} 
                 onChange={this.handleChange} 
          placeholder="nickname"/>*/}
          
          <input 
                 className= "forminput"
                 name="title"
                 type="text" 
                 value={this.state.title} 
                 onChange={this.handleChange} 
                 placeholder="title"/>
          <br/><br/>    
          <textarea
                 className = "formtextpole"
                 name="content"
                 type="text" 
                 value={this.state.content}  
                 onChange={this.handleChange} 
                 title={"Post text"}
                 />
          <br/><br/> 
          <input 
                className= "formButton"
                type="submit" 
                value="send" 
          />
        </form>  
      </div>

    );  
  }
}

const mapStateToProps = state => ({
   username: state.auth.user,
});

export default connect (mapStateToProps)(addForm);
