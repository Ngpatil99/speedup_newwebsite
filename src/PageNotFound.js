import React, { Component } from 'react'
import "./PageNotFound.css"

export default class PageNotFound extends Component {
  render() {
    return (
      <div className="error-container">
      <div className="error-text">
        <h1>Oops!</h1>
        <h2>404 - Page Not Found</h2>
        <p>Sorry, the page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
        <a href="/">Go Home</a>
      </div>
      <div className="error-image"></div>
    </div>
    )
  }
}
