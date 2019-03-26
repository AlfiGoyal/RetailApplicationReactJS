import React, { Component } from 'react';
import '../style.css';
import StarRatingComponent from 'react-star-rating-component';
import Moment from 'react-moment';

class Reviews extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null,
      rating:1
    }
  }

  componentWillReceiveProps(newProps) {
    const index = newProps.selected;
    const productData = Number.isInteger(index) ? newProps.productData[index] : null;
    if (productData !== null) {
      this.setState({ data: productData });
    }
  }

  getReview = (review => {
    const datePosted = (
      <Moment format="MMMM D, YYYY">
        {new Date(review.datePosted)}
      </Moment>
    );
    return (
      <div className="review-details">
        <div className="font-bold pd-btm10">{review.title}</div>
        <div className="font-size12">{review.review}</div>
        <div className="review-screen-name">
          {review.screenName}
          <span className="date-posted">{datePosted}</span>
        </div>
      </div>
    );
  });

  render() {
    const reviews = this.state.data ? this.state.data.CustomerReview : null;
    //proRating and conRating could be later user to upload image of starts
    const proRating = reviews ? reviews[0].Pro[0].overallRating : null;
    const conRating = reviews ? reviews[0].Con[0].overallRating : null;
    const totalReviews = reviews ? reviews[0].totalReviews : null;
    const proReview = reviews ? this.getReview(reviews[0].Pro[0]) : null;
    const conReview = reviews ? this.getReview(reviews[0].Con[0]) : null;
    const overallRating = reviews ? reviews[0].consolidatedOverallRating : null;
    console.log("overallRating",parseInt(overallRating),typeof(parseInt(overallRating)));
    return (
      <div>
        <div className="pro-con-star flex">

          <div className="layer-180 flex">
            <StarRatingComponent 
                  name="overallStars" 
                  editing={false}
                  renderStarIcon={() => <span>★</span>}
                  starColor="red"
                  color="red"
                  emptyStarColor='darkgrey'
                  starCount={5}
                  value={parseInt(overallRating)}
            />
            <div className="divider"/>
            <div className="overall"> overall</div>
          </div>
          <div className="all-reviews flex"><b>view all {totalReviews} reviews</b></div>      
        </div>

        <div className="rounded-rectangle-5">
          <div className="m-o-s layer">
            <div className="pro-con-info">
            <div className="pro-con-row">
              <div className="p-r-o pro-con-label font-bold">PRO</div> 
              <div className="pro-con-sublabel">most helpful 4-5 star review</div>
              <hr className="hr-style"/>
              <div className="pro-stars">
                <StarRatingComponent 
                      name="proRating" 
                      editing={false}
                      renderStarIcon={() => <span>★</span>}
                      starColor='red'
                      color='red'
                      emptyStarColor='darkgrey'
                      starCount={5}
                      value={parseInt(proRating)}
                />
              </div>
              <span className="font-size12">{proReview}</span>
            </div>
            <div className="pro-con-row">
              <div className="c-o-n  pro-con-label font-bold">CON</div>
              <div className="pro-con-sublabel">most helpful 1-2 star review</div>
              <hr className="hr-style"/>
              <div className="pro-stars">
                <StarRatingComponent 
                      name="conRating" 
                      editing={false}
                      renderStarIcon={() => <span>★</span>}
                      starColor="red"
                      color="red"
                      emptyStarColor='darkgrey'
                      starCount={5}
                      value={parseInt(conRating)}
                />
              </div>
              <span className="font-size12">{conReview}</span>   
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  }

}

export default Reviews;