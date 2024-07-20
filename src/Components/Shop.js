import React from 'react'
import Card from './Card'

const Shop = ({list,handleCart}) => {
  return (
    <div className='sec'>
      {
        list.map((item)=>{
            return <Card item={item} key={item.id} handleCart={handleCart}/>
        })
      }
    </div>
  )
}

export default Shop
