"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var ReactDOM = require("react-dom");
var reviewList_component_1 = require("./reviewList.component");
var SearchReview = (function (_super) {
    __extends(SearchReview, _super);
    function SearchReview(props) {
        var _this = _super.call(this, props) || this;
        _this.search = function () {
            var url = "http://mega-book.azurewebsites.net/api/review/?";
            url += _this.state.bookId ? "bookId=" + _this.state.bookId : "";
            url += _this.state.bookName ? "&bookName=" + _this.state.bookName : "";
            url += _this.state.reviewerName ? "&reviewer=" + _this.state.reviewerName : "";
            var xhr = new XMLHttpRequest();
            xhr.addEventListener("load", function (ev) { _this.responseHandler(ev); });
            // method, url, async : All file must be loaded before page is created
            xhr.open("GET", url, true);
            xhr.send();
            _this.setState({
                bookId: "",
                bookName: "",
                reviewerName: "",
            });
        };
        _this.state = {
            bookId: "",
            bookName: "",
            reviewerName: ""
        };
        return _this;
    }
    SearchReview.prototype.responseHandler = function (ev) {
        if (ev.target.status == 200) {
            var target = document.querySelector("#search-review-result");
            ReactDOM.unmountComponentAtNode(target);
            ReactDOM.render(React.createElement(reviewList_component_1.ReviewList, { reviews: JSON.parse(ev.target.response) }), target);
        }
    };
    SearchReview.prototype.bookIdChange = function (ev) {
        this.setState({
            bookId: ev.target.value
        });
    };
    SearchReview.prototype.bookNameChange = function (ev) {
        this.setState({
            bookName: ev.target.value
        });
    };
    SearchReview.prototype.reviewerNameChange = function (ev) {
        this.setState({
            reviewerName: ev.target.value
        });
    };
    SearchReview.prototype.render = function () {
        var _this = this;
        var bookId = this.state.bookId;
        var bookName = this.state.bookName;
        var reviewerName = this.state.reviewerName;
        return (React.createElement("div", null,
            React.createElement("div", { className: "page-header" },
                React.createElement("h1", null, "Search Reviews")),
            React.createElement("div", { className: "row well" },
                React.createElement("div", { className: "col-xs-3" },
                    React.createElement("input", { type: "text", className: "form-control", id: "search-review-book-id", value: bookId, onChange: function (ev) { return _this.bookIdChange(ev); }, placeholder: "Book ID" })),
                React.createElement("div", { className: "col-xs-3" },
                    React.createElement("input", { type: "text", className: "form-control", id: "search-review-book-name", value: bookName, onChange: function (ev) { return _this.bookNameChange(ev); }, placeholder: "Book Name" })),
                React.createElement("div", { className: "col-xs-3" },
                    React.createElement("input", { type: "text", className: "form-control", id: "search-review-reviewer-name", value: reviewerName, onChange: function (ev) { return _this.reviewerNameChange(ev); }, placeholder: "Reviewer Name" })),
                React.createElement("div", { className: "col-xs-3" },
                    React.createElement("button", { type: "button", className: "btn btn-primary", onClick: this.search }, "Search"))),
            React.createElement("hr", null),
            React.createElement("div", { id: "search-review-result" })));
    };
    return SearchReview;
}(React.Component));
exports.SearchReview = SearchReview;
//# sourceMappingURL=searchReview.component.js.map