import React, { useState } from 'react';

const PricingTable = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: '20px',
    padding: '20px',
    fontFamily: "'Open Sans', sans-serif",
    backgroundColor: '#fff',  // White background for the page
    color: '#000'             // Black text color
  };

  const planStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '250px',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',  // Black shadow for a grayscale effect
    borderRadius: '8px',
    textAlign: 'center',
    backgroundColor: '#f9f9f9', // Light gray for the plan card
    color: '#000',               // Black text color
    transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Smooth transition
    cursor: 'pointer'           // Cursor pointer on hover
  };

  const hoverPlanStyle = {
    ...planStyle,
    transform: 'scale(1.05)', // Slightly scale the card
    boxShadow: '0 6px 15px rgba(0, 0, 0, 0.3)', // Darker and larger shadow
    backgroundColor: '#e0e0e0' // Slightly darken the background color
  };

  const headerStyle = {
    fontSize: '1.5em',
    fontWeight: 600,
    margin: '10px 0',
    color: '#000'              // Black header text color
  };

  const featuresListStyle = {
    listStyleType: 'none',
    padding: 0,
    margin: '10px 0',
    color: '#000'              // Black list text color
  };

  const featureItemStyle = {
    fontSize: '0.9em',
    margin: '5px 0',
    color: '#000'              // Black feature text color
  };

  const priceStyle = {
    fontSize: '1.2em',
    fontWeight: 700,
    color: '#000',             // Black price text color
    margin: '15px 0'
  };

  const buttonStyle = {
    textDecoration: 'none',
    color: '#fff',             // White text for contrast
    backgroundColor: '#000',   // Black button background
    padding: '10px 20px',
    borderRadius: '5px',
    fontWeight: 600
  };

  const featuredButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#333'    // Dark gray for featured button
  };

  return (
    <div style={containerStyle}>
      {[{
        imgSrc: 'icon1.png', title: 'Personal', features: ['Custom domains', 'Sleeps after 30 mins of inactivity'], price: 'Free', buttonText: 'Sign up'
      }, {
        imgSrc: 'icon2.png', title: 'Small team', features: ['Never sleeps', 'Multiple workers for more powerful apps'], price: '$150', buttonText: 'Free trial'
      }, {
        imgSrc: 'icon3.png', title: 'Enterprise', features: ['Dedicated', 'Simple horizontal scalability'], price: '$400', buttonText: 'Free trial'
      }].map((plan, index) => (
        <div
          key={index}
          style={hoveredIndex === index ? hoverPlanStyle : planStyle}
          onMouseEnter={() => setHoveredIndex(index)} // Set hovered plan
          onMouseLeave={() => setHoveredIndex(null)}   // Reset hovered plan
        >
          <img src={plan.imgSrc} alt="" style={{ width: '200px', marginBottom: '10px' }} />
          <h2 style={headerStyle}>{plan.title}</h2>
          <ul style={featuresListStyle}>
            {plan.features.map((feature, i) => (
              <li key={i} style={featureItemStyle}>{feature}</li>
            ))}
          </ul>
          <span style={priceStyle}>{plan.price}</span>
          <a
            href="#/"
            style={buttonStyle}
          >
            {plan.buttonText}
          </a>
        </div>
      ))}
    </div>
  );
};

export default PricingTable;
