import React, { Component } from 'react';

class PostForm extends Component {
  state = {
    title: '',
    body: ''
  };

  // componentDidMount() {
  //   fetch('https://jsonplaceholder.typicode.com/posts');

  // }

  onChange = function(e) {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit(e) {
    e.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body
    };

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(post)
    })
      .then(res => res.json())
      .then(data => console.log(data));
  }

  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={e => this.onSubmit(e)}>
          <div>
            <label>Title:</label>
            <br />
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={e => this.onChange(e)}
            />
          </div>
          <br />
          <div>
            <label>Body:</label>
            <br />
            <textarea
              type="text"
              name="body"
              value={this.state.body}
              onChange={e => this.onChange(e)}
            />
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default PostForm;
