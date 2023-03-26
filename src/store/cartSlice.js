import { createSlice } from '@reduxjs/toolkit';

//get local storage 



const cartSlice = createSlice({
  name: 'shoppingcart',
  initialState: {
    items:[]
  },
  reducers: {
    add(state, action){

    
      const item = action.payload;
      const existingItem = state.items.find((i) => i.id === item.id);

      if (existingItem) {
        // If item already exists in cart, increment its quantity by 1
        existingItem.quantity += 1;
        existingItem.price +=item.price;
      } else {
        // If item does not exist in cart, add it to the cart with a quantity of 1
        state.items.push( {"id":item.id,"title":item.title,"description":item.description,"images":item.images[0],"price":item.price,"quantity":1} );
      }





      
      localStorage.setItem("cartitems",JSON.stringify(state.items));

//local storge add only string so thats why we first converted in to strings
          


    },
    remove(state, action){
  
      state.items=state.items.filter(item => item.id !== action.payload);
   
     localStorage.setItem("cartitems",JSON.stringify(state.items));


  },
    loadCart(state){
const cartData=localStorage.getItem("cartitems")
if(cartData!==null){
  state.items = JSON.parse(cartData)

}

    }
  },
});

//set local storge




export const { add, remove,loadCart } = cartSlice.actions;
export const cartReducer= cartSlice.reducer;
