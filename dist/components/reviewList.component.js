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
            list.push(React.createElement("div", { className: "well review-item" },
                React.createElement("h3", null,
                    "Rating: ",
                    review.rating),
                React.createElement("h3", null,
                    "- ",
                    review.reviewerName,
                    " ",
                    React.createElement("small", null, new Date(review.reviewDate).toDateString())),
                React.createElement("p", null, review.content)));
        });
        var avgRating = totalRating / list.length;
        return React.createElement("div", { className: "well review-container" },
            React.createElement("h2", null,
                " Average Rating: ",
                avgRating,
                ", ",
                list.length,
                " reviews"),
            React.createElement("div", { className: "review-items" }, list));
    };
    return ReviewList;
}(React.Component));
exports.ReviewList = ReviewList;
//# sourceMappingURL=reviewList.component.js.map