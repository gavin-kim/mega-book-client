"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var reviewList_component_1 = require("./reviewList.component");
var BookDetails = (function (_super) {
    __extends(BookDetails, _super);
    function BookDetails() {
        return _super.apply(this, arguments) || this;
    }
    BookDetails.prototype.render = function () {
        return <div>
            bookname isbn content .....
            <reviewList_component_1.ReviewList reviews={this.props.book.reviews}/>
        </div>;
    };
    return BookDetails;
}(React.Component));
exports.BookDetails = BookDetails;
