import React, { Component } from 'react';
import '../style.css';

class AddToCart extends Component {

    constructor(props, context) {
        
        super(props, context);
        this.state = {
            data: null,
            rating:1,
            clicks:1,
            show:true
        }
        this.pickUpButtonClick = this.pickUpButtonClick.bind(this);
        this.addToCartButtonClick = this.addToCartButtonClick.bind(this);
    }

    componentWillReceiveProps(newProps) {
        const index = newProps.selected;
        const productData = Number.isInteger(index) ? newProps.productData[index] : null;
        if (productData !== null) {
          this.setState({ data: productData });
        }
      }
    
    IncrementItem = () => {
        this.setState({ clicks: this.state.clicks + 1 });
    }

    DecreaseItem = () => {
        if(this.state.clicks !== 1)
        {
            this.setState({ clicks: this.state.clicks - 1 });
        }
    }
    
    pickUpButtonClick() {
        console.log("pick up button click here");
    }

    addToCartButtonClick() {
        console.log("add to cart button click here");
    }

    render() {
        const purchasingChannelCode = this.state.data ? this.state.data.purchasingChannelCode : null;
        var pickUpButton;
        var addToCartButton, findInStore;
        if(purchasingChannelCode === "0" || purchasingChannelCode === "2")
        {
            findInStore = <label id="findInAStore" className="small-text findInAStore">find in a store</label>
            pickUpButton =  <button
            className="pickUpButton col-xs-6"
            onClick={this.pickUpButtonClick}><label id="pickUpButton" className="white-font">PICK UP IN STORE</label>
        </button> 
            
        } else pickUpButton = '';
        if(purchasingChannelCode === "0" || purchasingChannelCode === "1")
        {
            
            addToCartButton =  
            <button
                className="addToCartButton col-xs-6"
                onClick={this.addToCartButtonClick}><label className="white-font">ADD TO CART</label>
            </button>
        } else addToCartButton = '';
        return (
            <div id="addToCart" className="pd-tp30 pd-btm30">
                <div className="section pd-btm30">
                        <div className="col-xs-6">
                            <div className="incrementer-input">
                                <div className="incrementer-label">quantity:</div>
                                <div className="incrementer">
                                    <button id="decButton" className="decrementer-button" onClick={this.DecreaseItem}>-</button>
                                    <div className="divider"/>
                                    <span id="quantity" className="quantity">{this.state.clicks}</span>  
                                    <div className="divider"/>
                                    <button id="incButto" className="incrementer-button" onClick={this.IncrementItem}>+</button>
                                </div>
                            </div>
                    </div>
                </div>
                {pickUpButton}
                <div className="divider"/>
                {addToCartButton}
                {findInStore}
                <div>
                    <div className="this-item-must pd-tp10">
                        <div className="left">
                            returns
                        </div>
                        <div className="right">
                            This item must be returned within 30 days of the ship date. See return policy for details. Prices, promotions, styles and availability may vary by store and online.
                        </div>
                    </div>
                </div> 
                <hr style={{border: 'none'}}/>
                <hr style={{border: 'none'}}/>
                <hr style={{border: 'none'}}/>
                <hr style={{border: 'none'}}/>
                <div className="pd-tp30">
                    <button className="three-box"><label id="atr" className="three-box-text">Add to registry</label></button>
                    <div className="divider"/>
                    <button className="three-box"><label id="atl" className="three-box-text">Add to list</label></button>
                    <div className="divider"/>
                    <button className="three-box"><label id="shr" className="three-box-text">Share</label></button>
                </div>  
            </div>        
        )
    }
}

export default AddToCart;