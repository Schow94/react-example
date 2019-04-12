import React, { Component } from 'react';
import './App.css';

import Posts from './components/Posts';
import PostForm from './components/PostForm';

class App extends Component {
  render() {
    return (
      <div>
        <h1 style={{ fontSize: '70px' }}>Blogs</h1>
        <PostForm />
        <Posts />
      </div>
    );
  }
}

export default App;
