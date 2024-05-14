import React from 'react'
import './categories.css';
import img1 from '../../img/cat-1.jpg';
import img2 from '../../img/cat-2.jpg';
import img3 from '../../img/cat-3.jpg';
import img4 from '../../img/cat-4.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css'

const Categories = () => {
    AOS.init({
        offset: 200,
        duration: 600,
        easing: 'ease-in-sine',
        delay: 100,
      });

  return (
    <div className='categories container'>
      <h2>CATEGORIES</h2>
      <div className="categories-content">
        <div className="category" data-aos = 'fade-right'>
            <img src={img1} alt="" />
            <div>
                <h3>CATEGORIES</h3>
                <h4>100 Products</h4>
                </div>
        </div>
        <div className="category"  data-aos = 'fade-up'>
            <img src={img2} alt="" />
            <div>
                <h3>CATEGORIES</h3>
                <h4>100 Products</h4>
                </div>
        </div>
        <div className="category"  data-aos = 'fade-down'>
            <img src={img3} alt="" />
            <div>
                <h3>CATEGORIES</h3>
                <h4>100 Products</h4>
                </div>
        </div>
        <div className="category"  data-aos = 'fade-left'>
            <img src={img4} alt="" />
            <div>
                <h3>CATEGORIES</h3>
                <h4>100 Products</h4>
                </div>
        </div>
        <div className="category"  data-aos = 'fade-right'>
            <img src={img3} alt="" />
            <div>
                <h3>CATEGORIES</h3>
                <h4>100 Products</h4>
                </div>
        </div>
        <div className="category"  data-aos = 'fade-up'>
            <img src={img4} alt="" />
            <div>
                <h3>CATEGORIES</h3>
                <h4>100 Products</h4>
                </div>
        </div>
        <div className="category"  data-aos = 'fade-down'>
            <img src={img1} alt="" />
            <div>
                <h3>CATEGORIES</h3>
                <h4>100 Products</h4>
                </div>
        </div>
        <div className="category"  data-aos = 'fade-left'>
            <img src={img2} alt="" />
            <div>
                <h3>CATEGORIES</h3>
                <h4>100 Products</h4>
                </div>
        </div>
        <div className="category"  data-aos = 'fade-right'>
            <img src={img2} alt="" />
            <div>
                <h3>CATEGORIES</h3>
                <h4>100 Products</h4>
                </div>
        </div>
        <div className="category"  data-aos = 'fade-up'>
            <img src={img1} alt="" />
            <div>
                <h3>CATEGORIES</h3>
                <h4>100 Products</h4>
                </div>
        </div>
        <div className="category"  data-aos = 'fade-down'>
            <img src={img4} alt="" />
            <div>
                <h3>CATEGORIES</h3>
                <h4>100 Products</h4>
                </div>
        </div>
        <div className="category"  data-aos = 'fade-left'>
            <img src={img3} alt="" />
            <div>
                <h3>CATEGORIES</h3>
                <h4>100 Products</h4>
                </div>
        </div>
      </div>
    </div>
  )
}

export default Categories
