import React, {Component} from 'react';
import './App.css';

import ProductCard from './ProductCard';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      additionalDiscount: 0,
      products: [
        {name: 'XMax X10 2018', brand: 'Salomon',    price:  720.0, discount: 0,    img: 'statics/ski-atomic-rojo.png'      },
        {name: 'Magnum',        brand: 'Head',       price:  650.0, discount: 0.2,  img: 'statics/ski-head-verde.png'       },
        {name: 'Amphibio XII',  brand: 'Elan',       price: 1250.0, discount: 0.15, img: 'statics/ski-elan-amphibio.png'    },
        {name: 'Vector Edge',   brand: 'Salomon',    price:  350.0, discount: 0.50, img: 'statics/bota-salomon-amarillo.png'},
        {name: 'Fogbreaker',    brand: 'CrazyCreek', price:   35.0, discount: 0.0,  img: 'statics/gafas-verde.png'          },
      ],
    };
  }

  handleAdditionalDiscountChange(event) {
    this.setState({additionalDiscount: event.target.value / 100});
  }

  render() {
    const products = this.state.products;
    const additionalDiscount = this.state.additionalDiscount;

    return (
      <div className="app">
        <h1>Products</h1>
        <div>
          Additional Discount: <input type="number"
                                   min="0" max="100" step="5"
                                   onChange={this.handleAdditionalDiscountChange.bind(this)}
                                   value={this.state.additionalDiscount * 100}/> %
        </div>
        <div className="products">
          {products.map(product =>
            <ProductCard key={product.name}
                         product={product}
                         additionalDiscount={additionalDiscount}/>,
          )}
        </div>
      </div>
    );
  }
}

export default App;
