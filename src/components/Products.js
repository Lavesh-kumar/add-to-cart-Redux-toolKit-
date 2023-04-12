import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import Swal from 'sweetalert2'
const {add}=require('../store/cartSlice')




export default function Products() {


  //code for redux tool kit actions
 const Dispatch =useDispatch(); 

   
 const [products,setproducts]=useState([]);

//now we have to dispatch the actions with the help of dispatch reducer
      
const handleAdd=(product)=>{

Dispatch(add(product))

Swal.fire({
  title: product.title,
  text: product.description.slice(0,100),
  imageUrl: product.images[0],
  imageWidth: 250,
  imageAlt: 'Custom image',
})
}










//code for pagination

const [currentPage, setcurrentPage] = useState(1);
const [itemsPerPage] = useState(8);       // setitemsPerPage
const [pageNumberLimit] = useState(10);//setpageNumberLimit
const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(10);
const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

const handleClick = (event) => {
  setcurrentPage(Number(event.target.id));
};

const pages = [];
for (let i = 1; i <= Math.ceil(products.length / itemsPerPage); i++) {
  pages.push(i);
}

const indexOfLastItem = currentPage * itemsPerPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage;
const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

const renderPageNumbers = pages.map((number) => {
  if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
    return (
      <a 
        key={number}
        id={number}
        onClick={handleClick}
        className={currentPage === number ? "active" : null}
      >
        {number}
      </a>
    );
  } else {
    return null;
  }



});

//useeffect
useEffect(()=>{

  //fetch api

  fetch('https://api.escuelajs.co/api/v1/products')
      .then(response => response.json()).then(data=>setproducts(data)).catch(error=>console.log(error))
  

})

const handleNextbtn = () => {
  setcurrentPage(currentPage + 1);

  if (currentPage + 1 > maxPageNumberLimit) {
    setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
    setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
  }
};

const handlePrevbtn = () => {
  setcurrentPage(currentPage - 1);

  if ((currentPage - 1) % pageNumberLimit === 0) {
    setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
    setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
  }
};

let pageIncrementBtn = null;
if (pages.length > maxPageNumberLimit) {
  pageIncrementBtn = <li onClick={handleNextbtn}> &hellip; </li>;
}

let pageDecrementBtn = null;
if (minPageNumberLimit >= 1) {
  pageDecrementBtn = <li onClick={handlePrevbtn}> &hellip; </li>;
}

// const handleLoadMore = () => {
//   setitemsPerPage(itemsPerPage + 5);
// };






return (


//display items
<div className="pag">        
<div className='allproduct'>

{currentItems.map((product) => (
 
 <div key={product.id} className='product' id='container'>

<div>
<img src={product.images[0]} alt="Ex products"/>
<h1>{product.title.slice(0,20)+".."}</h1>
<p>{product.description.slice(0,50)}</p>
<p style={{marginTop:'-30px',color:'red'}}>{"$"+product.price}</p>
<button className='btn btn-danger btn-sm' onClick={()=>handleAdd(product)} style={{marginBottom:'40px'}}>add to cart</button>
</div>
</div>

))}
  </div>



{/* pagination code  */}

<div className="pagination">
	<button  onClick={handlePrevbtn}
            disabled={currentPage === pages[0] ? true : false} title="previous page"><svg fill="currentColor"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg></button>
	
  
  {pageDecrementBtn}
  {renderPageNumbers}
  {pageIncrementBtn}

  
  
	<button onClick={handleNextbtn}
            disabled={currentPage === pages[pages.length - 1] ? true : false}
          title="next page"><svg fill="currentColor"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg></button>
	</div>

    </div>
        
 
  )
}
 