import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Shop from "./Components/Shop";
import list from "./List";
import Cart from "./Components/Cart";

function App() {
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);
  const [show, setShow] = useState(true);

  const handleCart = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id)
        isPresent = true;
    });

    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      },2000);
      return;
    }

    setCart([...cart, item]);
  };

  const handleChange=(item,d)=>{
    let ind=-1;
    cart.forEach((data,index)=>{
      if(data.id===item.id)
      {
        ind=index;
      }
    });
    const tempArr=cart;
    tempArr[ind].amount+=d;

    if(tempArr[ind].amount===0)
    {
      tempArr[ind].amount=1;
    }
    setCart([...tempArr]);

  }

  return (
    <div className="App">
      <Navbar size={cart.length} setShow={setShow}/>
      {
        show ? <Shop list={list} handleCart={handleCart}/> : <Cart cart={cart} setCart={setCart} handleChange={handleChange}/>
      }
      {
        warning && <div className="warning">Item is already added in the cart</div>
      }
    </div>
  );
}

export default App;
