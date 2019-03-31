import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProductList from './component/ProductList/ProductList'
import CartList from './component/CartList/CartList';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      CartList : []
    }
  }

  addToCart = (product) => {
    const tempList = this.state.CartList;
    let productFlag = false

    tempList.forEach((ele, index) => {
      if(product.id === ele.id) {
        tempList[index].qty += 1
        productFlag = true
      }
    });

      if(!productFlag) {
        product.qty = 1
        tempList.push(product)
      }

      this.setState ({
        CartList: tempList
      })
  }

  render() {
    return (
      <div className="App">
        <ProductList addToCart = {this.addToCart}/>
        <CartList cartList= {this.state.CartList}/>
      </div>
    );
  }
}

export default App;
