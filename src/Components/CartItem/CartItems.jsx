import React, { useContext } from 'react';
import './CartItems.css';
import remove_icon from '../Assets/cart_cross_icon.png';
import { ShopContext } from '../../Context/ShopContext';

const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItem, removeFromCart} = useContext(ShopContext);

  return (
    <div className='cartItems'>
        <div className="cartItems-format-main">
          <p>Products</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />
        {all_product.map((e) => {
          if (cartItem[e.id] > 0) {
            return <div>
            <div className="cartItems-format cartItems-format-main">
              <img src={e.image} alt="" className="cartIcon-product-icon"  />
              <p>{e.name}</p>
              <p>${e.new_price}</p>
              <button className="cartItem-quantity">{cartItem[e.id]}</button>
              <p>${e.new_price * cartItem[e.id]}</p>
              <img className='cartItem-remove-item' src={remove_icon} alt="" onClick={() => {removeFromCart(e.id)}} />
            </div>
            <hr />
          </div>
          }
          return null;
        })}
        <div className="cartItems-down">
          <div className="cartItems-total">
            <h1>Cart Totals</h1>
            <div>
              <div className="cartItems-total-item">
                <p>Sub total</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="cartItems-total-item">
                <p>Shipping free</p>
                <p>Free</p>
              </div>
              <hr />
              <div className="cartItems-total-item">
                <h3>Total</h3>
                <h3>${getTotalCartAmount()}</h3>
              </div>
            </div>
            <button>proceed to checkout</button>
          </div>
          <div className="cartItems-promocode">
            <p>If you have any promo code, Enter here</p>
            <div className="cartItem-promobox">
              <input type="text" placeholder='Enter promo code' />
              <button>Apply</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default CartItems