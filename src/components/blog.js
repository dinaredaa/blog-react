import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import axios from 'axios';

import '../assets/css/blog.scss';

class Blog extends Component {
  state = {
    posts : []
  }
  
  componentDidMount () {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(res => {
        this.setState({
          posts : res.data
        })
      })
  }
  
  render () {
    const userList = this.state.posts.map(post => {
      return (
        <div className="blog" key={post.id}>
          <div className="blog__content">
            <Link to={`/${post.id}`} className="blog__content__title">{post.title}</Link>
            <p className="blog__content__body">{post.body}</p>
          </div>
        </div>
      )
    })
    return (
      <div>
        <h1>Blog</h1>
        <div className="container blog-container">{userList}</div>
      </div>
    );
  }
}

export default Blog;
