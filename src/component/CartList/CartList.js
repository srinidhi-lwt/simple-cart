import React from 'react';
import CartRow from '../CartRow/CartRow';
import './CartList.css'

class CartList extends React.Component {
  render () {
    return (
      <div className="cart-container">
        <h1>Cart</h1>
        <CartRow name="Name" price="Price" qty="Quantity"/>

        {
          this.props.cartList.map((product, index) => {
            return <CartRow name={product.name} price={product.price} qty={product.qty} key={index}/>
          })
        }
      </div>
    );
  }
}

export default CartList;