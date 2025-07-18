import React, { Component } from 'react'
import loadingSpinner from './loading.gif'; // Ensure correct path

export class Spinner extends Component {
  render() {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <img src={loadingSpinner} alt="Loading..." />
      </div>
    )
  }
}

export default Spinner;

