import React ,{useState} from 'react'


function Burger({burger}) {
    const [ quantity , setquantity]= useState(1)
    const [ varient , setvarient]= useState('small')
  return (
    
               
    <div className='yoo'>
      <div className="container">
     
     
     <div className="burger-card">
         <center><img src={burger.image} alt="Burger"/></center>
         <h1>{burger.name}</h1>
         <div className='sidebox' >
           <div>
               <p>Varients</p>
              <select value={varient} onChange={(e)=>{setvarient(e.target.value)}}>
              {burger.varients.map(varients=>{
               return <option values={varients}>{varients}</option>
              })} 

              </select>
           </div>
           <div>
               <p>Quantity</p>
               <select value={quantity} onChange={(e)=>{setquantity(e.target.value)}}>
                   {[...Array(10).keys()].map((x,i)=>{
                       return <option value={i+1}>{i+1}</option>
                   })}
               </select>
           </div>

         </div>
         <div className='sidebox'>
           <div><h1>Price: {burger.prices[0][varient]*quantity}</h1></div>
           <div><button className='cartbtn'>Add to Cart</button></div>
         </div>
         
     </div>
       
       
    
   </div>


    </div>
  

  )
}

export default Burger