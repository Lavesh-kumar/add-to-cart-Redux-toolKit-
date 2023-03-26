import React from 'react'
import { useSelector } from 'react-redux';
import { remove,loadCart } from '../store/cartSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
function Cart() {
const dispatch=useDispatch()
//make function from dispatch hook

//this function change the state by calling reducer function
const handleremove=(product)=>{
dispatch(remove(product))
//note action are always called inside dispatch function


}




useEffect(()=>{

    dispatch(loadCart())
    
    },[dispatch])
    



//this function calculate the total price of cart
function Total (){
    var total=0;    
    cart.map((product) => { 
              return total=parseInt(product.price)+total
    })  
    return total;
    }    
  




const cart=useSelector((state)=>state.items)
return (
  <div className='cartparent'>
      <p>Total products:{cart.length}</p>
      <div className="cartWrapper">
          {cart.map((product) => (
              <div key={product.id} className="cartCard">
                  <img src={product.images} alt="" />
          <div style={{width:'200px'}}>   <h5>{product.title}</h5></div>
          <div style={{width:'50px'}}> <h5>{"$"+product.price}</h5></div>
          <div style={{width:'50px'}}> <h5>{product.quantity}</h5></div>
                  <button onClick={()=>handleremove(product.id)} className='btn btn-danger btn-sm'>
                      Remove
                  </button>
              </div>
          ))}
{/* 
bottom part
 */}

    <div style={{width:"100%"}}>
  <div>  <p style={{width:"100%",display:"flex",justifyContent:"right",borderTop:"1px solid black",borderBottom:"1px solid black"}} >total:${Total()}</p> </div>
<br/>
 <button style={{float:"right"}} className='btn btn-danger btn-sm'>Place order</button>      
   </div>







      </div>
 </div>
);
}



export default Cart















