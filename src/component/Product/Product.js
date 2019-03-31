import React from 'react';
import './Product.css'

class Product extends React.Component {

  handleClick = () => {
    this.props.addToCart(this.props.product)
  }

    render () {
        return (
        <div className="product-container">
          <div className="image-container">
            <img src="https://drop.ndtv.com/albums/AUTO/tata-tiago-jtp/10.jpg"/>
          </div>
          <div className="product-info">
              <div>{this.props.product.name} </div>
              <div>{this.props.product.price}</div>
              <div className="add-to-cart" onClick={this.handleClick}>Add to Cart</div>
          </div>
        </div>
        );
    }
}

export default Product;