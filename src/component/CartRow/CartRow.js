import React from 'react';
import './CartRow.css'

class CartRow extends React.Component {
    render () {
        return (
            <div className="row-container">
              <div className="cell">{ this.props.name }</div>
              <div className="cell">{ this.props.price }</div>
              <div className="cell">{ this.props.qty }</div>
            </div>
        );
    }
}

export default CartRow;