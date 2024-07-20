import React from 'react'
import '../Style/Card.css'

const Card = ({item,handleCart}) => {
    const {title,author,price,img} = item;
  return (
    <div className='card'>
      <div className='img-box'>
        <img src={img} alt="image" />
      </div>
      <div className='details'>
        <p className='title'>{title}</p>
        <p className='author'>{author}</p>
        <p className='price'>Price: <span>₹{price}</span></p>
        <button className='add-btn' onClick={()=>handleCart(item)}>Add to Cart</button>
      </div>
      
    </div>
  )
}

export default Card
