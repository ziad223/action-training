import React from 'react'
import { FaCartPlus  , FaTimes } from 'react-icons/fa'
import './watchlist.css';
const WatchList = ({watchlist , addToCart , removeFromWatchList}) => {
    
  return (
   <>
   {watchlist.length == 0 ? 
  <h2 className='no-products container'>No There Any Product In WatchList.</h2> 
  :
  <div className='watchlist-products container'>
  {watchlist.map(item =>{
   return(
       <div className='watchlist-product'>
         <img src={item.image ? item.image : item.thumbnail} alt="" />
         <h2>{item.name ? item.name : item.title.slice(0 , 15)}</h2>
         <h3>Price : ${item.price}</h3>
         <div>
           <button onClick={() => addToCart(item)} className='watch-add'><FaCartPlus className='watch-add-icon' /></button>
           <button onClick={() => removeFromWatchList(item)} className='watch-delete'><FaTimes className='watch-delete-icon'  /></button>
         </div>
       </div>
   )
  })}
</div>
  }
   </>
  )
}

export default WatchList
