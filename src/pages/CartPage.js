import React, { useContext, useState, useEffect } from 'react';
import UserContext from './UserContext';
import axios from 'axios';
import Checklogin from './Checklogin';

const CartPage = () => {
  const userdata = useContext(UserContext);
  const [cartItems, setCartItems] = useState([]);
  const [loggedin, setLoggedin] = useState(Checklogin());
  const [showToast, setShowToast] = useState(false);
  const [userlogged, setUserlogged] = useState(false);

  const fetchCartData = async () => {
    if (!userdata || !userdata.user_id) {
      console.error("User data is missing or null");
      return;
    }

    const data = new FormData();
    data.append("user_id", userdata.user_id);

    try {
      const response = await axios.post('https://amazon.indianhackerslab.com/get-carts.php', data, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });

      if (response.data.status === 'success') {
        setCartItems(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching cart data:", error);
    }
  };

  useEffect(() => {
    fetchCartData();
  }, [userdata]);

  // Function to remove cart item
  const Removecart = async (product) => {
    if (loggedin) {
      const data = new FormData();
      data.append("user_id", userdata.user_id);
      data.append("cart_id", product.cart_id);

      try {
        const response = await axios.post("https://amazon.indianhackerslab.com/delete-cart.php", data, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });

        if (response.data.status === 'success') {
          fetchCartData(); // Refresh the cart after deletion
          setShowToast(true);
        }
      } catch (error) {
        console.error("Error removing item from cart:", error);
      }
    } else {
      setUserlogged(true);
    }
  };

  return (
    <div className='container mt-4'>
      <h2 className="mb-4">Your Cart</h2>
      {cartItems.length > 0 ? (
        <div className='d-flex flex-row flex-wrap'>
          {cartItems.map((product) => (
            <div key={product.cart_id} className='card mx-2 my-2' style={{ width: '18rem' }}>
              <img src={product.images} className='card-img-top' alt={product.name} style={{ height: '150px', objectFit: 'cover' }} />
              <div className='card-body'>
                <p className='card-title'>{product.name}</p>
                <p className='card-text'>{product.description}</p>
                <button 
                  className='btn btn-danger' 
                  onClick={() => Removecart(product)}
                >
                  Remove from Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h5>Your cart has no items</h5>
      )}
    </div>
  );
};

export default CartPage;