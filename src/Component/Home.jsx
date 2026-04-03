import React from 'react';


const Home = () => {
  return (
    <div className="home-container">
      
      <div className="home-content">
        <h1>Welcome to My Website</h1>
        <p>
          Hi, I'm Easin Arafat — an aspiring web developer.
          I build modern and responsive websites using React.
        </p>

        <div className="home-buttons">
          <button className="btn-primary">Get Started</button>
          <button className="btn-secondary">Learn More</button>
        </div>
      </div>

    </div>
  );
};

export default Home;