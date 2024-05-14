import React, { useEffect, useState } from 'react'
import './fake.css';
import { FaCartPlus, FaHeart , FaSpinner } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Fake = ({addToCart , addToWatchlist}) => {

    let [products , setProducts] = useState([]);
    let [loading , setLoading] = useState(true);
  
    useEffect(function(){
      setLoading(true)
     setTimeout(() =>{
      fetch("https://fakestoreapi.com/products")
   .then(res => res.json())
   .then(data =>{
    setProducts(data);
    setLoading(false)
   })
     } , 1000)
    } , [])


  return (
  <>
  
    <div className='fake container'>
    
       {loading ?
       <FaSpinner className='spinner'/>
        :
    <>
        <div className="title">
        <h2>Fake Products</h2>
        <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed sint dicta provident corporis hic esse porro accusantium ullam. Consectetur id mollitia ipsa tenetur sequi exercitationem facere rem itaque error! Velit!
        </p>
      </div>
        <div className="products">
        {products.map(function(product){
         return (
            <div className='product'>
              <Link to = {`/fakeDetails/${product.id}`}>
            <img src={product.image} alt="" />
              
              </Link>
            <h2>{product.title.slice(0 , 15)}...</h2>
             <div>
                <button onClick={() => addToWatchlist(product)}>
                    <FaHeart className='control-btn'/>
                </button>
                <button onClick={() => addToCart(product)}>
                    <FaCartPlus className='control-btn'/>
                </button>
             </div>
            </div>
         )
        })}
    </div>
    </>
      }

    </div>
  </>
  )
}

export default Fake
