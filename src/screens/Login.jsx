import React from "react";

import imglogo from "../images/g1.gif";

const Login = () => {
  return (
    <div>
      {/* <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio,line-clamp"></script> */}

      <div className="navbar">
        <div className="navbar1">
          <a href="/">Cart</a>
          <a href="/">About Us</a>

          <img src={imglogo} className="" alt="Tailwind Play" />
        </div>
      </div>
    </div>
  );
};

export default Login;

{
  /* <center>
<h1>Login here</h1> 

<div className='login'>
<form onSubmit={handleSubmit}>
<div >
  <label htmlFor="username">Username:</label>
  <input
    type="text"
    id="username"
    value={username}
    onChange={(e) => setUsername(e.target.value)}
  />
</div>
<div>
  <label htmlFor="password">Password:</label>
  <input
    type="password"
    id="password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
  />
</div>
<button type="submit">Login</button>
</form>
</div>
</center> */
}
