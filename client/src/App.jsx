
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Headbar from './Headbar';
import Posts from './Posts';


const App = () => {
    return (
      <Provider store={store}>
      <div>
        <Headbar />
        <Posts />    
      </div>
      </Provider>
    );
  };

export default App;