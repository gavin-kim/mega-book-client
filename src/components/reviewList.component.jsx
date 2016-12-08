"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var ReviewList = (function (_super) {
    __extends(ReviewList, _super);
    function ReviewList() {
        return _super.apply(this, arguments) || this;
    }
    ReviewList.prototype.render = function () {
        var totalRating = 0;
        var list = Array();
        this.props.reviews.forEach(function (review) {
            totalRating += review.rating;
            list.push(<div className="well review-item">
                    <h3>Rating: {review.rating}</h3>
                    <h3>- {review.reviewerName} <small>{new Date(review.reviewDate).toDateString()}</small></h3>
                    <p>{review.content}</p>
                </div>);
        });
        var avgRating = totalRating / list.length;
        return <div className="well review-container">
            <h2> Average Rating: {avgRating}, {list.length} reviews</h2>
            <div className="review-items">{list}</div>
        </div>;
    };
    return ReviewList;
}(React.Component));
exports.ReviewList = ReviewList;
