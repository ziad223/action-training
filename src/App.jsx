import React, { useState } from 'react'
import './App.css';
import Navbar from './components/navabr/Navbar';
import {BrowserRouter , Route , Routes} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/about/About';
import Shop from './pages/Shop';
import Fake from './pages/fake/Fake';
import Dummy from './pages/dummy/Dummy';
import Contact from './pages/contact/Contact';
import FakeDetails from './pages/fake/FakeDetails';
import DummyDetails from './pages/dummy/DummyDetails';
import Swal from 'sweetalert2'
import Cart from './pages/cart/Cart';
import WatchList from './pages/watchList/WatchList';


const App = () => {

  const [cartItems , setCartItems] = useState([]);
  const [watchlist , setWatchList] = useState([]);
  const [dark , setDark] = useState(false);

  function isDark(){
    setDark(!dark);
  }


  function addToCart(product){
    const selectedProduct = cartItems.find(item => item.id == product.id);

    if(selectedProduct){
     setCartItems(cartItems.map(item => item.id == product.id ?

      {...selectedProduct , qty : selectedProduct.qty + 1} : item

      ))

    }else{
    setCartItems([...cartItems , {...product , qty :1}]);
    Swal.fire({
      title: "This Product Added To The Cart Successfully!",
      icon: "success",
      showConfirmButton : false,
      timer : 2000,
    });
    }

   
  }

  function removeFromCart(product){
   setCartItems(cartItems.filter(item => item.id != product.id ))
   Swal.fire({
    title: "This Product Removed From The Cart Successfully!",
    icon: "success",
    showConfirmButton : false,
    timer : 2000,
  });
  }

  function addToWatchlist(product){
    const selectedItem = watchlist.find(item => item.id == product.id );

    if(selectedItem){
      Swal.fire({
        title: "This Product Alreary Exists in Your WatchList!",
        icon: "warning",
        showConfirmButton : false,
        timer : 2000,
      });
    }else{
      setWatchList([...watchlist , product ])
      Swal.fire({
        title: "This Product Added To The WatchList Successfully!",
        icon: "success",
        showConfirmButton : false,
        timer : 2000,
      });
      
    }
  }

  function decreaseQty(product){
   let selectedProduct= cartItems.find(item => item.id == product.id);

   if(selectedProduct.qty == 1){
    setCartItems(cartItems.filter(item => item.id != product.id))
   Swal.fire({
    title: "This Product Removed From The Cart Successfully!",
    icon: "success",
    showConfirmButton : false,
    timer : 2000,
  });
   }else{
    setCartItems(cartItems.map(item => item.id == product.id ?

      {...selectedProduct , qty : selectedProduct.qty - 1} : item

    ))
   }
   console.log('Hello');
  }

  function removeFromWatchList(product){
    setWatchList(watchlist.filter(item => item.id != product.id ))
   Swal.fire({
    title: "This Product Removed From The Cart Successfully!",
    icon: "success",
    showConfirmButton : false,
    timer : 2000,
  });
  }
  return (
  <div className={dark ? 'app-dark' : 'app'}>
      <BrowserRouter>
      <Navbar cartItems = {cartItems} watchlist = {watchlist} dark = {dark} isDark = {isDark}/>
    <Routes>
      <Route path='/' element = {<Home addToCart = {addToCart} addToWatchlist = {addToWatchlist}/>}/>
      <Route path='/about' element = {<About/>}/>
      <Route path='/shop' element = {<Shop/>}/>
      <Route path='/fake' element = {<Fake addToCart = {addToCart} addToWatchlist = {addToWatchlist}/>}/>
      <Route path='/dummy' element = {<Dummy addToCart = {addToCart} addToWatchlist = {addToWatchlist}/>}/>
      <Route path='/contact' element = {<Contact/>}/>
      <Route path='/watchlist' element = {<WatchList removeFromWatchList = {removeFromWatchList} addToCart = {addToCart} watchlist = {watchlist}/>}/>
      <Route path='/cart' element = {<Cart cartItems = {cartItems} addToCart = {addToCart} removeFromCart = {removeFromCart} decreaseQty = {decreaseQty}/>}/>
      <Route path='/fakeDetails/:id' element = {<FakeDetails addToCart = {addToCart}/>}/>
      <Route path='/dummyDetails/:id' element = {<DummyDetails addToCart = {addToCart}/>}/>
      </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App
