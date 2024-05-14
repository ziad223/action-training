import React, { useEffect, useState } from 'react'
import { FaCartPlus, FaSpinner, FaStar } from 'react-icons/fa6';
import { useParams } from 'react-router-dom'

const DummyDetails = ({addToCart}) => {
    let {id} = useParams();
    let [product , setProduct] = useState([]);
    let [loading , setLoading] = useState(false);


    useEffect(function(){
        setLoading(true)
    fetch(`https://dummyjson.com/products/${id}`)
    .then(res => res.json())
    .then(data =>{
        setProduct(data);
        setLoading(false)
    })
    } , [])
  return (
   <>
   {loading? 
   <FaSpinner className='spinner'/>
   :
   <div className='productDetails container'>
   <div className="productDetails-img">
    <img src={product.thumbnail} alt="" />
  </div>
  <div className="productDetails-info">
    <h2>{product.category}</h2>
    <h3>{product.title}</h3>
    <div>
        <FaStar className='star-icon'/>
        <FaStar className='star-icon'/>
        <FaStar className='star-icon'/>
        <FaStar className='star-icon'/>
        <FaStar className='star-icon'/>
    </div>
    <p>{product.description}</p>
    <h2>Price : ${product.price}</h2>
    <h3>Count : {product.stock}</h3>
  
    <button onClick={() => addToCart(product)}>
        <FaCartPlus/>
        Add To Cart
    </button>
  </div>

</div> 
  }
   </>
  )
}

export default DummyDetails
