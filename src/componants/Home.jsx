import React from 'react'
import './Login.css';
import imglogo from '../images/logo.png';
import img1 from '../images/b1.jpg';
import img2 from '../images/b2.jpg';
import img3 from '../images/b3.jpg';
import img4 from '../images/b4.jpg';
import img5 from '../images/b5.jpg';
import img6 from '../images/b6.jpg';


const Home = () => {
  return (
    <div className="navbar">
      <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio,line-clamp"></script>
     <img src={imglogo} className="h-11 rounded-[50]" alt="Tailwind Play" />
      <a href="/">Cart</a>
      <a href="/">About Us</a>
      <a href="/">Login</a>
      <a href="/">Nearby Stores</a>
      
      <div className="container">
    <div class="burger-card">
        <img src={img1} alt="Burger 1"/>
        <h2>Veggie Burger</h2>
        <p>Rs.89/-</p>
      </div>
      <div className="burger-card">
        <img src={img2} alt="Burger 2"/>
        <h2>Simple Burger</h2>
        <p>Rs.70/-</p>
      </div>
      <div className="burger-card">
        <img src={img3} alt="Burger 3"/>
        <h2>Veggie Burger</h2>
        <p>Rs.120/-</p>
      </div>
      <div className="burger-card">
        <img src={img4} alt="Burger 4"/>
        <h2>Special Burger</h2>
        <p>Rs.110/-</p>
      </div>
      <div className="burger-card">
        <img src={img5}alt="Burger 5"/>
        <h2>Jumbo Burger</h2>
        <p>Rs.170/-</p>
      </div>
    <div className="burger-card">
      <img src={img6} alt="Burger 6"/>
      <h2>Large Cheese Burger</h2>
      <p>Rs.200/-</p>
    </div>
    </div>


    </div>


  )
}

export default Home