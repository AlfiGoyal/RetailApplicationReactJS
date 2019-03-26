import React, { Component } from "react";
import jsonData from './item-data.json';
import SelectedItemImage from './components/selectedItemImage';
import Reviews from './components/reviews';
import ProductHighlights from './components/productHighlights';
import Offers from './components/offers';
import Promotions from './components/promotions';
import AddToCart from './components/addToCart';

import 'bootstrap/dist/css/bootstrap.css';

import './style.css';
class RetailApp extends Component {
      constructor(props) {
        super(props);
        this.state = {
          allData: null,
          selectedIndex: null,
        }
      }
        
      async componentDidMount() {
        // console.log(jsonData.CatalogEntryView) logs the entire data
        const itemsData = await jsonData ? jsonData.CatalogEntryView : null;
        // Currently we just have 1 item so selected 0.
        const index = itemsData ? 0 : null;
        if (Number.isInteger(index)) {
          this.setState({ allData: itemsData, selectedIndex: index });
        }
      }
    

       render() {
         //console.log(jsonData.CatalogEntryView[0].Offers[0].OfferPrice[0].formattedPriceValue);
         return(
            <div className="layer-0 product-container">
                <div className="product-info-item pd-lft50">
                    <SelectedItemImage
                        productData={this.state.allData}
                        selected={this.state.selectedIndex}
                    />
                </div>
                <div className="product-info-item product-group pd-lft50">
                    <div>
                        <Offers
                            productData={this.state.allData}
                            selected={this.state.selectedIndex}
                        />
                    </div>
                    <div>
                        <Promotions
                            productData={this.state.allData}
                            selected={this.state.selectedIndex}
                        />
                    </div>
                    <div>
                        <AddToCart
                            productData={this.state.allData}
                            selected={this.state.selectedIndex}
                        />
                    </div>
                    <div className="product-info-item">
                        <ProductHighlights
                            productData={this.state.allData}
                            selected={this.state.selectedIndex}
                        />
                    </div>
                </div>
                <div className="product-info-item pd-lft30 pd-lft50">
                        <Reviews
                            productData={this.state.allData}
                            selected={this.state.selectedIndex}
                        />
                </div>
                
                
                
            </div>
          )
       }
}
export default RetailApp;