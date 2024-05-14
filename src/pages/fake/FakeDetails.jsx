import React, { useEffect, useState } from 'react'
import { FaCartPlus, FaStar } from 'react-icons/fa6';
import { useParams } from 'react-router-dom'
import './fake.css';
import { FaSpinner } from "react-icons/fa6";

const FakeDetails = ({addToCart}) => {
    let {id} = useParams();

    let [product , setProduct] = useState([]);
    let [loading , setLoading] = useState(true);

    useEffect(function(){
        setLoading(true)
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then(res => res.json())
    .then(data =>{
        setProduct(data);
        setLoading(false)
    })
    } , [])
  return (
    <>
    {loading ? 
    <FaSpinner className='spinner'/>
    :
    <div className='productDetails container'>
      <div className="productDetails-img">
        <img src={product.image} alt="" />
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
        <h3>Count : {product?.rating?.count}</h3>
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

export default FakeDetails
