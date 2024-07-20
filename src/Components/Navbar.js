import React from 'react'
import '../Style/Navbar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Navbar = ({size,setShow}) => {
  return (
    <nav>
      <div className='nav-box'>
        <span className='my_shop' onClick={()=>setShow(true)}>BMX Shop</span>
        <div className='cart'>
            <span><i className='fas fa-cart-plus' onClick={()=>setShow(false)}></i></span>
            <span>{size}</span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
