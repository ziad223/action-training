import React from 'react'
import './about.css';

import img1 from '../../img/about.jpg';

const About = () => {
  return (
    <div className='about container'>
      <h1>About <span>Us</span></h1>
      <div className="about-content">
      <img src={img1} alt="" />
      <div className="about-right">
        <h2>Welcome To <span>Bravo Shop</span></h2>
        <h4><span>Bravo Shop</span> is Best online Shopping Company Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam expedita dolore omnis cumque ipsa vel nam non necessitatibus eius, molestiae officiis, rem et distinctio? Nisi voluptates amet in aliquam sapiente.
</h4>
      <a href='#'>Shop Now</a>
      </div>
      </div>
    </div>
  )
}

export default About
