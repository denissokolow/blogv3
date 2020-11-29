import React, { Component } from "react";  
import { Link } from 'react-router-dom';
import Login from "./Login";
import "./Headbar.css";

class Headbar extends Component {
  
  render() {  
    return (
      <div className= "back">  
        <Link to="/" className = "link" style={{ textDecoration: 'none' }}>
              <button type="button" className = "button">
                Home
              </button>
        </Link> 
        <Link to="/newpost" className = "link" style={{ textDecoration: 'none' }}>
               <button type="button" className = "button">
                New post
              </button>
        </Link>
        <Login />
      </div>
    );  
  }
}

export default Headbar;