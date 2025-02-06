import React from "react";
import useHoverEffect from "./customHooks/useHoverEffect"

export default function AboutUs() {
  const { hoveredIndex, handleMouseEnter, handleMouseLeave } = useHoverEffect();

  const advantages = [
    {
      title: "Innovative Solutions",
      description: "We create cutting-edge technologies to solve real-world problems.",
      icon: "🚀",
    },
    {
      title: "User-Centric Design",
      description: "Our products prioritize user experience and intuitive interfaces.",
      icon: "🎨",
    },
    {
      title: "Performance & Speed",
      description: "Fast, efficient, and optimized for the best performance.",
      icon: "⚡",
    },
    {
      title: "Security First",
      description: "We ensure data safety and follow best security practices.",
      icon: "🔒",
    },
  ];

  return (
    <div className="aboutus-wrapper">
      <div className="aboutus-header">
        <h1>About Us</h1>
        <p>Discover what makes us different</p>
      </div>

      <div className="advantages-section">
        <h2>Our Advantages</h2>
        <div className="advantages-cards">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className={`advantage-card ${hoveredIndex === index ? "hovered" : ""}`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="advantage-icon">{advantage.icon}</div>
              <h3>{advantage.title}</h3>
              <p>{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
