import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import Form from './Form';
import Posts from './Posts';
import Post from './Post';
import Home from './Home';

const Routs = () => {
    return (
        <Router>
          <Switch> 
              <Route exact path="/" component= {App} />
              <Route path="/newpost" component= {Form} />
              <Route path="/posts/:username" component= {Posts} />
              <Route path="/post/:_id" component= {Post}/>  
          </Switch>
        </Router>     
    
    );
  };

  export default Routs;