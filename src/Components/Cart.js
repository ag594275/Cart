import React, { useEffect, useState } from "react";
import "../Style/Cart.css";

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);
  const handlePrice=()=>{
    let ans=0;
    cart.map((item)=>{
        ans+=item.amount*item.price;
    })
    setPrice(ans);
  }

  useEffect(()=>{
    handlePrice()
  })

  const handleRemove = (id) => {
    let ind=-1;
    cart.forEach((data,index)=>{
        if(data.id===id)
        {
          ind=index;
          cart[ind].amount=1;
        }
      });
    const arr = cart.filter((item) => item.id !== id); 
    setCart(arr);
  };

  return (
    <div className="main-cart">
        {
            (cart.length===0)? (<div className="empty">Cart is Empty</div>) :(<div>{cart?.map((item) => (
                <div className="cart-box" key={item.id}>
                  <div className="img-box">
                    <img src={item.img} alt="image" />
                    <p className="title">{item.title}</p>
                  </div>
                  <div className="btn">
                    <button
                      className="incdec-btn"
                      onClick={() => {
                        handleChange(item, +1);
                      }}
                    >
                      +
                    </button>
                    <button
                      className="incdec-btn"
                      onClick={() => {
                        handleChange(item, -1);
                      }}
                    >
                      -
                    </button>
                  </div>
                  <div className="quan-price">
                    <p className="quantity">
                      Quantity: <span>{item.amount}</span>
                    </p>
                    <p className="price">
                      Price: <span>₹{item.price}</span>
                    </p>
                    <button onClick={() => handleRemove(item.id)} className="remove">
                      Remove
                    </button>
                  </div>
                </div>
              ))}
              <div className="total">
                <span>Total Price of your Cart:</span>
                <span> ₹{price} </span>
              </div></div>)
        }
      {/* {cart?.map((item) => (
        <div className="cart-box" key={item.id}>
          <div className="img-box">
            <img src={item.img} alt="image" />
            <p className="title">{item.title}</p>
          </div>
          <div className="btn">
            <button
              className="incdec-btn"
              onClick={() => {
                handleChange(item, +1);
              }}
            >
              +
            </button>
            <button
              className="incdec-btn"
              onClick={() => {
                handleChange(item, -1);
              }}
            >
              -
            </button>
          </div>
          <div className="quan-price">
            <p className="quantity">
              Quantity: <span>{item.amount}</span>
            </p>
            <p className="price">
              Price: <span>₹{item.price}</span>
            </p>
            <button onClick={() => handleRemove(item.id)} className="remove">
              Remove
            </button>
          </div>
        </div>
      ))}
      <div className="total">
        <span>Total Price of your Cart:</span>
        <span> ₹{price} </span>
      </div> */}
    </div>
  );
};

export default Cart;
