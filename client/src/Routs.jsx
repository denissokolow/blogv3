import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import Form from './Form';
import Post from "./Post"

const Routs = () => {
    return (
      <section>
        <Router>               
         <Route exact path="/newpost" component={Form} /> 
         <Route exact path="/" component={App} />
         <Route exact path="/api/posts/:id" component={Post}  />        
        </Router>     
      </section>
    );
  };

  export default Routs;