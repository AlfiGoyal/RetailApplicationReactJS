import React, { Component } from 'react';
import '../style.css';

class Offers extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null,
    }
  }

  componentWillReceiveProps(newProps) {
    const index = newProps.selected;
    const productData = Number.isInteger(index) ? newProps.productData[index] : null;
    if (productData !== null) {
      this.setState({ data: productData });
    }
  }

  render() {
    const offers = this.state.data ? this.state.data.Offers : null;
    const price = offers ? offers[0].OfferPrice[0].formattedPriceValue : null;
    const priceQualifier = offers ? offers[0].OfferPrice[0].priceQualifier : null;


    return (
      <div className="product-offers">
        <div className="formatted-price">{price}</div>
        <div className="price-qualifier">{priceQualifier}</div>
      </div>
    )
  }

}

export default Offers;