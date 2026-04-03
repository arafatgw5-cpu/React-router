import React from 'react';
import { useNavigate } from 'react-router-dom';

const Laptops = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>This is My Laptops</h1>
      <button onClick={handleGoHome}>Go to Home page</button>
    </div>
  );
};

export default Laptops;