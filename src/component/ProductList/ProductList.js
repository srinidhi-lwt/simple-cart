import React from 'react';
import Product from '../Product/Product'

class ProductList extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
          productList : [
              {
                name: "Car",
                id: 1,
                price: 100000,
                url: "https://drop.ndtv.com/albums/AUTO/tata-tiago-jtp/10.jpg"
              },
              {
                name: "Bike",
                id: 2,
                price: 10000,
                url: "https://drop.ndtv.com/albums/AUTO/tata-tiago-jtp/11.jpg"
              },
              {
                name: "SUV",
                id: 3,
                price: 1000000,
                url: "https://drop.ndtv.com/albums/AUTO/tata-tiago-jtp/3.jpg"
              },
          ]
      }
    }

    render() {
        return (
          <div className="product-list">
            {
              this.state.productList.map((ele, i) => {
                return <Product addToCart={this.props.addToCart} product={ele} key={i}/>
              })
            }
          </div>
        );
    }
}

export default ProductList;