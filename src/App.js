import './App.css';
import React, { Component } from 'react';
import Navbar from './component/Navbar';
import News from './component/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

export default class App extends Component {
  pageSize=9;
  render() {
    return (
      <div>
        <Router>
          <Navbar />

          <Routes>
            
            <Route
              path="/"
              element={<News key={"home"} pageSize={this.pageSize} country="us" category="General" />}
            />
            <Route
              path="/Technology"
              element={<News key={"technology"} pageSize={this.pageSize} country="us" category="Technology" />}
            />
            <Route
              path="/Sports"
              element={<News key={"sports"} pageSize={this.pageSize} country="us" category="Sports" />}
            />
            <Route
              path="/Entertainment"
              element={<News key={"entertainment"} pageSize={this.pageSize} country="us" category="Entertainment" />}
            />
            <Route
              path="/Health"
              element={<News key={"health"} pageSize={this.pageSize} country="us" category="Health" />}
            />
            <Route
              path="/Science"
              element={<News key={"science"} pageSize={this.pageSize} country="us" category="Science" />}
            />
            <Route
              path="/Business"
              element={<News key={"business"} pageSize={this.pageSize} country="us" category="Business" />}
            />
            <Route
              path="/General"
              element={<News key={"general"} pageSize={this.pageSize} country="us" category="General" />}
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
