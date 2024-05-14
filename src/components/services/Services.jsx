import React from 'react'
import './services.css';
import { FaCheck , FaTruck , FaPhoneVolume   } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import AOS from 'aos';
import 'aos/dist/aos.css'

const Services = () => {

  AOS.init({
    offset: 200,
    duration: 600,
    easing: 'ease-in-sine',
    delay: 100,
  });


  return (
    <div className='services container'>
       <div className="service" data-aos = 'fade-right'>
       <FaCheck className='service-icon'/>
       <span>Quality Product</span>
       </div>
       <div className="service" data-aos = 'fade-up'>
       <FaTruck className='service-icon'/>
       <span>Free Shipping</span>
       </div>
       <div className="service" data-aos = 'fade-down'>
       <MdKeyboardDoubleArrowRight className='service-icon'/>
       <span>14-Day Return</span>
       </div>
       <div className="service" data-aos = 'fade-left'>
       <FaPhoneVolume className='service-icon' />
       <span>24/7 Support</span>
       </div>
    </div>
  )
}

export default Services
