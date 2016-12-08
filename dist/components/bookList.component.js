"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
// declare class for React.Component and export
var BookList = (function (_super) {
    __extends(BookList, _super);
    function BookList() {
        return _super.apply(this, arguments) || this;
    }
    BookList.prototype.render = function () {
        var list = Array();
        this.props.books.forEach(function (book) {
            list.push(React.createElement("button", { type: "button", className: "list-group-item" },
                "Name: ",
                book.name,
                " ISBN: ",
                book.isbn,
                " "));
        });
        return React.createElement("div", { className: "list-group" }, list);
    };
    return BookList;
}(React.Component));
exports.BookList = BookList;
//# sourceMappingURL=bookList.component.js.map