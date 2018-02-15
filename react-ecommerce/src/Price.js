import React from 'react';

// export default class Price extends React.Component {
//     render() {
//         const formattedPrice = this.props.price.toLocaleString('es-ES', {
//             style: 'currency', currency: 'EUR', currencyDisplay: 'symbol'
//         });
//         return <span>{formattedPrice}</span>;
//     }
// }

export default function Price(props) {
  const formattedPrice = props.price.toLocaleString('es-ES', {
    style: 'currency', currency: 'EUR', currencyDisplay: 'symbol',
  });

  console.log('rendering Price', formattedPrice);
  return <span>{formattedPrice}</span>;
}
