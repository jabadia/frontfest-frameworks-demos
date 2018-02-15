import React from 'react';
import './ProductCard.css';

import Price from './Price';
import DiscountTag from './DiscountTag';

export default class ProductCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  addToCart(product) {
    alert(`added ${product.name}`);
  }

  render() {
    const product = this.props.product;
    const isDiscounted = product.discount !== 0 || this.props.overallDiscount !== 0;
    const effectiveDiscount = product.discount + this.props.overallDiscount;
    const finalPrice = product.price * (1 - effectiveDiscount);

    console.log('rendering ProductCard', product.name);
    return (
      <div className='product-card'>
        <div className="description">
          <div className="name">{product.name}</div>
          <div className="brand">{product.brand}</div>
          {isDiscounted && <div className='price--original'><Price price={product.price}/></div>}
          <div className='price'><Price price={finalPrice}/></div>
          <button className="nice-button" onClick={() => this.addToCart(product)}>Add to Cart</button>
        </div>
        <div className="img">
          <DiscountTag className="discount" discount={product.discount}/>
          {product.img && <img src={product.img} alt={product.name}/>}
        </div>
      </div>
    );
  }
}
