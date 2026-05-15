import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from '../redux/CartSlice';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

function CartItem() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      <Navbar />

      <div className="cart-container">
        <h2>Total Cart Amount: ${totalAmount}</h2>

        {cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <div>
              <img
                src={item.image}
                alt={item.name}
                width="100"
                height="100"
              />
            </div>

            <div>
              <h3>{item.name}</h3>
              <p>Unit Price: ${item.price}</p>
              <p>Total: ${item.price * item.quantity}</p>
              <p>Quantity: {item.quantity}</p>
            </div>

            <div>
              <button
                onClick={() =>
                  dispatch(updateQuantity({ id: item.id, amount: 1 }))
                }
              >
                +
              </button>

              <button
                onClick={() =>
                  dispatch(updateQuantity({ id: item.id, amount: -1 }))
                }
              >
                -
              </button>

              <button onClick={() => dispatch(removeItem(item.id))}>
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