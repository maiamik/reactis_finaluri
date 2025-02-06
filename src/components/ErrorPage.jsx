import React from 'react';
import { Link } from 'react-router-dom';

export default function ErrorPage() {
  return (
    <div className="error-wrapper">
      <div className="error-content">
        <h1 className="error-code">404</h1>
        <p className="error-text">Oops! This page is lost in space.</p>
        <p className="error-description">
          We can't find the page you're looking for. But don't worry, let's get you back to safety!
        </p>
        <Link to="/" className="error-btn">Return to Home</Link>
      </div>
    </div>
  );
}
