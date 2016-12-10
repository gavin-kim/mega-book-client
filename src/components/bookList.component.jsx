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
    function BookList() {
        return _super.apply(this, arguments) || this;
    }
    BookList.prototype.showBookDetails = function () {
        ReactDOM.render(<bookDetails_component_1.BookDetails book={book}/>, document.querySelector("#main"));
    };
    BookList.prototype.render = function () {
        var list = Array();
        this.props.books.forEach(function (book) {
            list.push(<button type="button" className="list-group-item" onClick=>
                Name: {book.name} ISBN: {book.isbn} </button>);
        });
        return <div className="list-group">{list}</div>;
    };
    return BookList;
}(React.Component));
exports.BookList = BookList;
