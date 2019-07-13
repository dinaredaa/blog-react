import React, { Component } from 'react';
import axios from 'axios';

import '../assets/css/blog.scss';

class Post extends Component {
  state = {
    post : {}
  }
  
  componentDidMount () {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`)
      .then(res => {
        console.log(res.data)
        this.setState({
          post : res.data
        })
      })
  }
  
  render () {
    return (
      <div className="container blog-container page__no--background">
        <div className="post">
          <h3>{this.state.post.title}</h3>
          <p>{this.state.post.body}</p>
        </div>
      </div>
    );
  }
}

export default Post;
