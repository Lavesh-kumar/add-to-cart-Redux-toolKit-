import React from 'react'
import { useSelector } from 'react-redux';
import { remove } from '../store/cartSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Swal from 'sweetalert2';


function Cart() {
const dispatch=useDispatch()
//make function from dispatch hook

//this function change the state by calling reducer function
const handleremove=(product)=>{
dispatch(remove(product))
//note action are always called inside dispatch function

Swal.fire({

  icon: 'success',
  title: 'product removed successfully',
  showConfirmButton: true,
  timer: 1500
  })



}




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
                 <div className='photo'> <img src={product.images} alt="" /></div>
          <div className='title'>   <p>{product.title}</p></div>
          <div className='price'> <p>{"$"+product.price}</p></div>
          <div className='quantity'> <p>{product.quantity}</p></div>
                <div><button onClick={()=>handleremove(product.id)} className='btn btn-danger btn-sm'>
                      Remove
                  </button></div>
   
   
              </div>
          ))}
{/* 
bottom part
 */}

    <div style={{width:"100%"}}>
  <div>  <p style={{width:"100%",display:"flex",justifyContent:"right",borderTop:"1px solid black",borderBottom:"1px solid black"}} >total:${Total()}</p> </div>

   </div>



      </div>
 </div>
);
}



export default Cart















