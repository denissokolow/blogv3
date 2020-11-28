import React, { Component } from "react";  
import { Link } from 'react-router-dom';
import "./Headbar.css";

class Headbar extends Component {
  
  render() {  
    return (
      <div className= "back">  
        <Link to="/" className = "link">
              <button type="button" className = "button">
                Home
              </button>
        </Link> 
        <Link to="/newpost" className = "link">
               <button type="button" className = "button">
                New post
              </button>
        </Link>        
      </div>

    );  
  }
}

export default Headbar;