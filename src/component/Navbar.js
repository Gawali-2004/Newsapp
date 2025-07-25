import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar  navbar-expand-lg navbar-dark bg-dark shadow">
  <div className="container-fluid">
    <Link className="navbar-brand text-warning" to="/"> Voxify News</Link>
    <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav me-auto mb-2">
        <li className="nav-item"><Link className="nav-link" to="/General">Home</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/Technology">Technology</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/Sports">Sports</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/Entertainment">Entertainment</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/Health">Health</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/Science">Science</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/Business">Business</Link></li>
      </ul>
    </div>
  </div>
</nav>

      </div>
    );
  }
}

export default Navbar;
