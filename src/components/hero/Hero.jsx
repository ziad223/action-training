import React from 'react'
import './hero.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'


const Hero = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay : true,
        autoplaySpeed : 4000,
        slidesToShow: 1,
        slidesToScroll: 1
      };

      AOS.init({
        offset: 200,
        duration: 600,
        easing: 'ease-in-sine',
        delay: 100,
      });
      
  return (
    <div className='hero container'>
        <div className="hero-left"   data-aos="fade-right">
            <Slider {...settings}>
            <div className="hero-left-one">
                <div>
                    <h2>Mens Fashion</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam neque consectetur quisquam, consequuntur repudiandae placeat velit numquam non! Labore quis inventore officia officiis odit corporis sunt voluptatum molestiae ea a.
                    </p>
                   <Link to='/shop'>
                   <button>Shop Now</button>
                   </Link>
                </div>
            </div> 
             <div className="hero-left-two">
                <div>
                    <h2>Woman Fashion</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam neque consectetur quisquam, consequuntur repudiandae placeat velit numquam non! Labore quis inventore officia officiis odit corporis sunt voluptatum molestiae ea a.
                    </p>
                    <button>Shop Now</button>
                </div>
            </div>
            <div className="hero-left-three">
                <div>
                    <h2>Kids Fashion</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam neque consectetur quisquam, consequuntur repudiandae placeat velit numquam non! Labore quis inventore officia officiis odit corporis sunt voluptatum molestiae ea a.
                    </p>
                    <button>Shop Now</button>
                </div>
            </div>
            </Slider>
        </div>
        <div className="hero-right" data-aos="fade-left">
        <div className="hero-right-up">
            <div className="h">
            <h4>Save 20%</h4>
            <h2>Special Offer</h2>
            <button >
                Shop Now
                </button>
            </div>
        </div>
        <div className="hero-right-down">
        <div className="h">
        <h4>Save 20%</h4>
            <h2>Special Offer</h2>
            <button>Shop Now</button>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Hero
