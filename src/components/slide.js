import React, { Component } from "react";
import Slider from "react-slick";



class Slide extends Component {
  
  render() {
    const settings = {
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3
    };

    return (
        <div style={{flex: 1, flexDirection: 'row'}}>
            <Slider {...settings} >
                <div className="slider">
                    <div><img  width= '61px' height= '61px'   src='./../img/Canister.png'/></div>
                    <div><img width= '61px' height= '61px' src='./../img/Pouring.png' /></div>
                    <div><img width= '61px' height= '61px' src='./../img/Solo_Mixer.png' /></div>
                </div>
            </Slider>
        </div>
    );
  }
}
export default Slide;