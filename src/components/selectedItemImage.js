import React, { Component } from 'react';
import '../style.css';
import Slide from './slide.js';
import { Carousel } from 'react-responsive-carousel';
/* eslint import/no-webpack-loader-syntax: off */
import 'react-responsive-carousel/lib/styles/carousel.css';
import LeftArrow from './leftArrow.js'
import RightArrow from './rightArrow';

class SelectedItemImage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null,
    }
  }

  componentWillReceiveProps(newProps) {
    const index = newProps.selected;
    const productData = Number.isInteger(index) ? newProps.productData[index] : null;
    this.setState({ data: productData });
  }

  goToPrevSlide = () => {

  }
  
  goToNextSlide = () => {
    // Exiting the method early if we are at the end of the images array.
    // We also want to reset currentIndex and translateValue, so we return
    // to the first image in the array.
    if(this.state.currentIndex === this.state.images.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      })
    }
    
    // This will not run if we met the if condition above
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -(this.slideWidth())
    }));
  }
  

  render() {
    const title = this.state.data ? this.state.data.title : 'No product selected';
    const images = this.state.data ? this.state.data.Images : null;
    const primaryImage = images ? images[0].PrimaryImage[0].image : null;
    //const AlternateImage1 = images ? images[0].AlternateImages[0].image : null;
    //const AlternateImage2= images ? images[0].AlternateImages[1].image : null;
    //Currently Alternate Images donot work so just adding images from local rather than item.json
    //console.log(AlternateImage1);
    return (
      <div className="selected-product">
        <div id="ninja-professional-blender" className="ninja-professional-blender">{title}</div>
        <Carousel showArrows={false} showStatus={false} showIndicators={false}>
            <div>
                <img src={primaryImage} />
            </div>
        </Carousel>
        <div className="flex">
          <LeftArrow
            goToPrevSlide={this.goToPrevSlide}
          />
          <Slide/>
          <RightArrow
            goToNextSlide={this.goToNextSlide}
          />
        </div>
        
      </div>
    )
  }

}

export default SelectedItemImage;