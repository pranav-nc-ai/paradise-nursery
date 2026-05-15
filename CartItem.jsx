import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from '../redux/CartSlice';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

function CartItem() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalCost = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      <Navbar />

      <div className="cart-container">
        <h2>Total Cart Items: {totalItems}</h2>
        <h2>Total Cost: ${totalCost}</h2>

        {cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <img
              src={item.image}
              alt={item.name}
              width="120"
              height="120"
            />

            <div>
              <h3>{item.name}</h3>
              <p>Unit Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Total Price: ${item.price * item.quantity}</p>
            </div>

            <div>
              <button
                onClick={() =>
                  dispatch(updateQuantity({ id: item.id, amount: 1 }))
                }
              >
                Increase
              </button>

              <button
                onClick={() =>
                  dispatch(updateQuantity({ id: item.id, amount: -1 }))
                }
                style={{ marginLeft: '10px' }}
              >
                Decrease
              </button>

              <button
                onClick={() => dispatch(removeItem(item.id))}
                style={{ marginLeft: '10px' }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}

        <button
          onClick={() => alert('Coming Soon')}
          style={{ marginRight: '20px' }}
        >
          Checkout
        </button>

        <Link to="/products">
          <button>Continue Shopping</button>
        </Link>
      </div>
    </div>
  );
}

export default CartItem;
