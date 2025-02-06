import React from 'react';
import { Link } from 'react-router-dom'; 

export default function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to the Ultimate Productivity App</h1>
          <p>Your task management and productivity solution, all in one place.</p>
          <Link to="/to-do-list" className="cta-btn">Get Started</Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Explore Features</h2>
        <div className="features-cards">
          <div className="card">
            <h3>Task Management</h3>
            <p>Create, manage, and track your tasks effortlessly.</p>
            <Link to="/to-do-list" className="card-btn">Try It Now</Link>
          </div>
          <div className="card">
            <h3>About Us</h3>
            <p>Learn more about our mission and vision.</p>
            <Link to="/aboutus" className="card-btn">Know More</Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2025 My App. All rights reserved.</p>
      </footer>
    </div>
  );
}
