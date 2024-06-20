import React , {useState,useEffect} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import burger from '../burgerdata'
import Burger from '../componants/Burger'
const dispatch = useDispatch()
useEffect(()=>{
  dispatch(getAllBurgers())
},[])

const Home = () => {
  return (
    <div className="main">      

     <div className="row">
      {burger.map(burger=>{

          return <div className="column">
            <div>
              <Burger burger={burger}/>
            </div>
          </div>

      })}
     </div>
     

   
   
    </div>
  )
}

export default Home



  {/*       
        <div className="container">
      <div className="box1">
      </div>
      <div className="box2">
      <div class="burger-card">
          <center><img src={img1} alt="Burger 1"/></center>
          <h2>Veggie Burger</h2>
          <p>Lorem ipsum dolor sit amet Totam deleniti voluptate vel</p>
          <p>Rs.89/-</p>
        </div>
        <div className="burger-card">
          <center><img src={img2} alt="Burger 2"/></center>
          <h2>Simple Burger</h2>
          <p>Lorem ipsum dolor sit amet Totam deleniti voluptate vel</p>
          <p>Rs.70/-</p>
        </div>
        <div className="burger-card">
          <center><img src={img3} alt="Burger 3"/></center>
          <h2>Veggie Burger</h2>
          <p>Lorem ipsum dolor sit amet Totam deleniti voluptate vel</p>
          <p>Rs.120/-</p>
        </div>
        <div className="burger-card">
          <center><img src={img4} alt="Burger 4"/></center>
          <h2>Special Burger</h2>
          <p>Lorem ipsum dolor sit amet Totam deleniti voluptate vel</p>
          <p>Rs.110/-</p>
        </div>
        <div className="burger-card">
          <center><img src={img5}alt="Burger 5"/></center>
          <h2>Jumbo Burger</h2>
          <p>Lorem ipsum dolor sit amet Totam deleniti voluptate vel</p>
          <p>Rs.170/-</p>
        </div>
      <div className="burger-card">
        <center><img src={img6} alt="Burger 6"/></center>
        <h2>Large Cheese Burger</h2>
        <p>Lorem ipsum dolor sit ametTotam deleniti voluptate vel</p>
        <p>Rs.200/-</p>
      </div>
      </div>
      </div>
   */}