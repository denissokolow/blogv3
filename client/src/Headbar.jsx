import React, { Component } from "react";  
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import logo from './img/avocado.png'
import Login from "./Login";
import "./Headbar.css";

class Headbar extends Component {
  
  render() {   
    const { loginOnOff } = this.props;
    return (
      <div className= "back">
      { loginOnOff ?  
      <div className= "btn-div">
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
      </div>
      : <div className = "img-div"> 
            <img src= { logo } alt="Avocato Cat"/> 
        <div className = "title-div">
            Avocato Blog
        </div>
        </div> 
      }
        <Login />
      </div>
    );  
  }
}

const mapStateToProps = state =>  ({
  loginOnOff: state.auth.login
});

export default connect (mapStateToProps)(Headbar);