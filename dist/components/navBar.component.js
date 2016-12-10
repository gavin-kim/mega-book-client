"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var ReactDOM = require("react-dom");
var addBook_component_1 = require("./addBook.component");
var searchReview_component_1 = require("./searchReview.component");
var NavBar = (function (_super) {
    __extends(NavBar, _super);
    function NavBar() {
        var _this = _super.apply(this, arguments) || this;
        _this.showAddBook = function () {
            ReactDOM.unmountComponentAtNode(document.querySelector("#content"));
            ReactDOM.render(React.createElement(addBook_component_1.AddBook, { root: _this.props.root }), document.querySelector("#content"));
        };
        _this.showSearchReview = function () {
            ReactDOM.unmountComponentAtNode(document.querySelector("#content"));
            ReactDOM.render(React.createElement(searchReview_component_1.SearchReview, null), document.querySelector("#content"));
        };
        _this.showBookList = function () {
            _this.props.root.renderBookList();
        };
        return _this;
    }
    NavBar.prototype.render = function () {
        return (React.createElement("nav", { className: "navbar navbar-default" },
            React.createElement("div", { className: "container" },
                React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "navbar-header" },
                        React.createElement("a", { className: "navbar-brand", onClick: this.showBookList }, this.props.title)),
                    React.createElement("ul", { className: "nav navbar-nav" },
                        React.createElement("li", null,
                            React.createElement("a", { onClick: this.showAddBook }, "Add Book")),
                        React.createElement("li", null,
                            React.createElement("a", { onClick: this.showSearchReview }, "Search Reviews")))))));
    };
    return NavBar;
}(React.Component));
exports.NavBar = NavBar;
//# sourceMappingURL=navBar.component.js.map