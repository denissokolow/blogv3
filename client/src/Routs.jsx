import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import Form from './Form';
import Posts from './Posts';
import Post from './Post';

const Routs = () => {
    return (
      <section>
        <Router> 
          <Switch>
              <Route path="/newpost" component={Form} />
              <Route path="/posts" component={Posts} />
              <Route exact path="/" component= {App} />
              <Route path="/api/posts/" component= {Post}  />        
          </Switch>
        </Router>     
      </section>
    );
  };

  export default Routs;