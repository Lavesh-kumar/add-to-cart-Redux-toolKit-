import './Styles/Products.css'
import './Styles/Cart.css'

import Products from "./components/Products.js"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderNavigation from './components/HeaderNavigation.js';
import Cart from "./components/Cart.js"
import './index.css'
import { Provider } from 'react-redux';
import store from './store/store';
function App() {

  return (
    
    <Provider store={store}>
<BrowserRouter>

<HeaderNavigation/>

<Routes>

<Route path='/' element={<Products/>} > </Route>
<Route path='/usercart' element={<Cart/>}> </Route>

</Routes>




</BrowserRouter>
</Provider>
    
  );
}

export default App;
