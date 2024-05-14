import React from 'react'
import './featureProduct.css'

import { Fproducts } from './Fproducts'
import { FaCartPlus, FaHeart, FaStar } from 'react-icons/fa'

const FeatureProducts = ({addToCart , addToWatchlist}) => {
  return (
    <div className='feature-product container'>
      <h2 className='title'>Feature Products</h2>
       <div className="features">
        {Fproducts.map(function(product){
            return(
                <div className='feature'>
              <img src={product.image} alt="" />
              <h2>{product.name}</h2>
              <div className='featur-price'>
                <h3>${product.price} <span>${product.prevPrice}</span></h3>
              </div>
              <div className='stars'>
                <FaStar className='star-icon'/>
                <FaStar className='star-icon'/>
                <FaStar className='star-icon'/>
                <FaStar className='star-icon'/>
                <FaStar className='star-icon'/>
              </div>
              <div className='feature-control'>
              <button onClick={() => addToWatchlist(product)}> <FaHeart className='control-icon'/></button>
               <button  onClick={() => addToCart(product)}><FaCartPlus className='control-icon'/></button>
              </div>
                </div>
            )
        })}
       </div>
    </div>
  )
}

export default FeatureProducts
