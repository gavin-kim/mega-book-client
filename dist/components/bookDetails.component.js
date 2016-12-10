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
        return React.createElement("div", null,
            React.createElement("div", { className: "page-header" },
                React.createElement("h1", { className: "book-details-title" },
                    this.props.book.name,
                    "  -",
                    React.createElement("small", null, new Date(this.props.book.releaseDate).toDateString()))),
            React.createElement("div", { className: "boot-details-content well well-sm" }, this.props.book.content),
            React.createElement("hr", null),
            React.createElement("button", { "data-toggle": "modal", "data-target": "#modal-add-review", type: "button", className: "btn btn-warning" }, "Add Review"),
            React.createElement("br", null),
            React.createElement(reviewList_component_1.ReviewList, { reviews: this.props.book.Reviews }));
    };
    return BookDetails;
}(React.Component));
exports.BookDetails = BookDetails;
//# sourceMappingURL=bookDetails.component.js.map