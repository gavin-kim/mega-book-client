"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var ReactDOM = require("react-dom");
var bookDetails_component_1 = require("./bookDetails.component");
// declare class for React.Component and export
var BookList = (function (_super) {
    __extends(BookList, _super);
    function BookList(props) {
        return _super.call(this, props) || this;
    }
    BookList.prototype.showBookDetails = function (book) {
        ReactDOM.unmountComponentAtNode(document.querySelector("#content"));
        ReactDOM.render(React.createElement(bookDetails_component_1.BookDetails, { book: book }), document.querySelector("#content"));
    };
    BookList.prototype.render = function () {
        var _this = this;
        var list = Array();
        this.props.books.forEach(function (book) {
            list.push(React.createElement("button", { type: "button", className: "list-group-item", onClick: function () { return _this.showBookDetails(book); } },
                "Name: ",
                book.name,
                " ISBN: ",
                book.isbn,
                " "));
        });
        return (React.createElement("div", null,
            React.createElement("div", { className: "page-header" },
                React.createElement("h1", null, "Book List")),
            React.createElement("div", { className: "list-group" }, list)));
    };
    return BookList;
}(React.Component));
exports.BookList = BookList;
//# sourceMappingURL=bookList.component.js.map