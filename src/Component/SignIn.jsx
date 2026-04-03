import React, {  useState } from 'react';
import { useNavigate } from 'react-router-dom';


const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
   const navigate =useNavigate()
  const handleEmailChange =(event)=>{
            setEmail(event.target.value)
  }
  const handlePasswordChange =(event)=>{
            setPassword(event.target.value)
  }
  const handleSubmit =(event)=>{
    event.preventDefault();
       if(email==="arafatgw5@gmail.com"&&password==="123"){
         const user = {
    name: "Easin Arafat",
    role: "Aspiring Web Developer",
    email: "arafatgw5@gmail.com"
  };
         navigate("/profile",{state:user})
       } else{
        alert("Wrong")
       }
  }

  return (
    <div className="container">
      <div className="form-box">
        <h2>Sign In</h2>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>

          <button type="submit">Sign In</button>
        </form>

        <p className="extra-text">
          Don't have an account? <span>Sign Up</span>
        </p>
      </div>
    </div>
  );
};

export default SignIn;