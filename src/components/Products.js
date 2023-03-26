import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import Swal from 'sweetalert2'

const {add,loadCart}=require('../store/cartSlice')




export default function Products() {
const Dispatch =useDispatch(); 
 
//usestate  
 const [products,setproducts]=useState([]);


//useeffect
 useEffect(()=>{


  //fetch api

  fetch('https://api.escuelajs.co/api/v1/products')
      .then(response => response.json()).then(data=>setproducts(data)).catch(error=>console.log(error))
  

})
      
      

const handleAdd=(product)=>{
//now we have to dispatch the actions with the help of dispatch reducer

Dispatch(add(product))
Swal.fire({
  title: product.title,
  text: product.description.slice(0,100),
  imageUrl: product.images[0],
  imageWidth: 250,
  imageAlt: 'Custom image',
})
}



useEffect(()=>{

Dispatch(loadCart())

},[Dispatch])






return (
        
<div className='allproduct'>

{products.map((product) => (
 
 <div key={product.id} className='product' id='container'>

<div>
<img src={product.images[0]} alt="Ex products"/>
<h1>{product.title.slice(0,20)+".."}</h1>
<p>{product.description.slice(0,50)}</p>
<p style={{marginTop:'-30px',color:'red'}}>{"$"+product.price}</p>
<button className='btn btn-danger btn-sm' onClick={()=>handleAdd(product)}>add to cart</button>


</div>
</div>


))}
  

</div>


        
 
  )
}
 