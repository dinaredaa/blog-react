import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Blog from './components/blog'
import Post from './components/post'

import './App.css';

export default App;

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/blog" component={Blog}/>
          <Route path="/:id" component={Post}/>
        </Switch>
      </div>
    </BrowserRouter>
);
}
