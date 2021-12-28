import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import Category from './components/Category';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  render() {
    const {categories} = this.props;
    return (
      <BrowserRouter>
        <div className="App">
          <Routes>
            {/* <Switch> */}
              <Route exact path="/" element={<Home/>} />
              {/* <Route exact path="/category/:category" element={<Category />} /> */}
              {/* <Route exact path="/category/:category" render={(props) => {
                const id = props.match.params.category;
                const data = categories.find(category => category.categoryName === id);
                if (data) {
                  console.log("component found");
                  return <Category {...props} {...data} />
                } else {
                  console.log("component not found");
                }
              }} /> */}
            {/* </Switch> */}
          </Routes>
        </div>
      </BrowserRouter>
      // <div className="App">
      //   <Home/>
      // </div>
    );
  }
}

function mapStateToProps(state) {
  // const message = state.message;
  return {
    message: state.auth.message,
    categories: state.auth.categories
  }
}

export default connect(mapStateToProps)(App);