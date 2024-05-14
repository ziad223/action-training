import React from 'react'
import Hero from '../components/hero/Hero';
import Services from '../components/services/Services';
import Categories from '../components/categories/Categories';
import FeatureProducts from '../components/featureProduct/FeatureProducts';
import Vendor from '../components/vendor/Vendor';

const Home = ({addToCart , addToWatchlist}) => {
  return (
    <div className='home'>
      <Hero/>
      <Services/>
      <Categories/>
      <FeatureProducts addToCart = {addToCart} addToWatchlist = {addToWatchlist}/>
      <Vendor/>
    </div>
  )
}

export default Home
