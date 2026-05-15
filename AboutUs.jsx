import React from 'react';
import Navbar from './Navbar';

function AboutUs() {
  return (
    <div>
      <Navbar />

      <div style={{ padding: '40px', lineHeight: '1.8' }}>
        <h1>About Paradise Nursery</h1>

        <p>
          Welcome to Paradise Nursery, your trusted destination for beautiful
          indoor plants and gardening essentials.
        </p>

        <p>
          At Paradise Nursery, we believe plants bring life, freshness,
          positivity, and natural beauty into every home and workspace.
        </p>

        <p>
          We provide a carefully selected collection of air-purifying plants,
          flowering plants, succulents, decorative pots, and low-maintenance
          indoor plants suitable for every lifestyle.
        </p>

        <p>
          Our mission is to make gardening simple, affordable, and enjoyable
          for everyone while helping customers create healthier and greener
          living environments.
        </p>

        <p>
          Thank you for choosing Paradise Nursery.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
