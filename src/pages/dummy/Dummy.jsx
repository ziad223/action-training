import React, { useEffect, useState } from 'react'
import './dummy.css'
import { FaCartPlus, FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { CgSpinner } from "react-icons/cg";

const Dummy = ({addToCart , addToWatchlist}) => {
    
    let [products , setProducts] = useState([]);
    let [loading , setLoading] = useState(true);

    useEffect(() =>{
      setLoading(true)
     setTimeout(() => {
       fetch("https://dummyjson.com/products")
     .then(res => res.json())
     .then(data =>{
        setProducts(data.products);
      setLoading(false)

     }, 1000);

     })
    } , [])
  return (
    <>
    {loading ? 
   <CgSpinner className='spinner'/>
   :
   <div className='dummy container'>
      <div className="title">
        <h1>Dummy json Api</h1>
        <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed sint dicta provident corporis hic esse porro accusantium ullam. Consectetur id mollitia ipsa tenetur sequi exercitationem facere rem itaque error! Velit!
        </p>
      </div>
      <div className="products">
       {products.map(function(product){
        return(
            <div className='product'>
            <Link to={`/dummyDetails/${product.id}`}>
            <img src={product.thumbnail} alt="" />
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
    </div>
  }
    </>
  )
}

export default Dummy
