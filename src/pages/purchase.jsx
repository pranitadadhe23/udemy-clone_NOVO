import React from 'react';

const PricingTable = () => {
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
    color: '#000'               // Black text color
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
      <div style={planStyle}>
        <img src="icons/icon1.png" alt="" style={{ width: '60px', marginBottom: '10px' }} />
        <h2 style={headerStyle}>Personal</h2>
        <ul style={featuresListStyle}>
          <li style={featureItemStyle}>Custom domains</li>
          <li style={featureItemStyle}>Sleeps after 30 mins of inactivity</li>
        </ul>
        <span style={priceStyle}>Free</span>
        <a href="#/" style={buttonStyle}>Sign up</a>
      </div>

      <div style={planStyle}>
        <img src="icons/icon2.png" alt="" style={{ width: '60px', marginBottom: '10px' }} />
        <h2 style={headerStyle}>Small team</h2>
        <ul style={featuresListStyle}>
          <li style={featureItemStyle}>Never sleeps</li>
          <li style={featureItemStyle}>Multiple workers for more powerful apps</li>
        </ul>
        <span style={priceStyle}>$150</span>
        <a href="#/" style={featuredButtonStyle}>Free trial</a>
      </div>

      <div style={planStyle}>
        <img src="icons/icon3.png" alt="" style={{ width: '60px', marginBottom: '10px' }} />
        <h2 style={headerStyle}>Enterprise</h2>
        <ul style={featuresListStyle}>
          <li style={featureItemStyle}>Dedicated</li>
          <li style={featureItemStyle}>Simple horizontal scalability</li>
        </ul>
        <span style={priceStyle}>$400</span>
        <a href="#/" style={buttonStyle}>Free trial</a>
      </div>
    </div>
  );
};

export default PricingTable;
