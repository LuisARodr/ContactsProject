import React, { Component } from 'react';
import { Provider } from 'react-redux'

//import Contact from './contacts'
import Post from './components/post'
//import PostForm from './components/postForm'

import store from './store'
//<PostForm />
class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <div  className="App">
          <div className="post">
            <hr />
            <Post />
          </div>
          </div>
      </Provider>
    );
  }
}

export default App;
