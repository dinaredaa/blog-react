import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/home.scss';

class Home extends Component {
  render () {
    return (
      <div className="page">
        <h1 className="page__title">Welcome to simple blog pages built with React</h1>
        <h4 className="page__text">this is Just Home page, You can go to <Link to="/blog">Blogs</Link> from here</h4>
      </div>
    );
  }
}

export default Home;
