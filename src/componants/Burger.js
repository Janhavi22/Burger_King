import React ,{useState} from 'react'
// import {Modal} from 'react-bootstrap'

function Burger({burger}) {
    const [ quantity , setquantity]= useState(1)
    const [ varient , setvarient]= useState('small')

    // const [show, setShow] = useState(false);  
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
  return (
    
               
    <div className='main-container'>
      <div className="container">
     
     
     <center>
     <div className="burger-card">
        {/* <div onClick={handleShow}> */}
        <center><img src={burger.image} alt="Burger"/></center>
         <h1>{burger.name}</h1>
        {/* </div> */}
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
           <div><h1>Price: {burger.prices[0][varient]*quantity} Rs/-</h1></div>
           <div><button className='cartbtn'>Add to Cart</button></div>
         </div>
         
     </div>
     </center>
       
       
    
   </div>
   {/* <Modal show={show}>
        <Modal.Header closeButton>
          <Modal.Title>{burger.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
         <center><img src={burger.image} alt="Burger"/></center>
        </Modal.Body>

        <Modal.Footer>
          <button className='modalbtn' onClick={handleClose}>Close</button>
        </Modal.Footer>
      </Modal> */}


    </div>
  

  )
}

export default Burger;