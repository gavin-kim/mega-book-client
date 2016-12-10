"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var AddBook = (function (_super) {
    __extends(AddBook, _super);
    function AddBook(props) {
        var _this = _super.call(this, props) || this;
        _this.addBookFunction = function () {
            var json = {
                name: _this.state.bookTitle,
                content: _this.state.bookContent,
                isbn: _this.state.bookISBN
            };
            var jsonString = JSON.stringify(json);
            var addBookPostRequest = function (url, jsonString, func) {
                var xhr = new XMLHttpRequest();
                xhr.addEventListener("load", func);
                // method, url, async : All file must be loaded before page is created
                xhr.open("POST", url, true);
                xhr.setRequestHeader("Content-Type", "application/json");
                xhr.send(jsonString);
            };
            addBookPostRequest("http://mega-book.azurewebsites.net/api/book", jsonString, function (response) {
                console.log(response);
                if (response.target.status == 200) {
                    _this.props.root.requestBookList(null);
                }
            });
        };
        _this.state = {
            bookTitle: "",
            bookContent: "",
            bookISBN: ""
        };
        return _this;
    }
    AddBook.prototype.bookTitleChange = function (ev) {
        this.setState({
            bookTitle: ev.target.value
        });
    };
    AddBook.prototype.bookContentChange = function (ev) {
        this.setState({
            bookContent: ev.target.value
        });
    };
    AddBook.prototype.bookISBNChange = function (ev) {
        this.setState({
            bookISBN: ev.target.value
        });
    };
    AddBook.prototype.render = function () {
        var _this = this;
        var bookTitle = this.state.bookTitle;
        var bookContent = this.state.bookContent;
        var bookISBN = this.state.bookISBN;
        return (React.createElement("div", null,
            React.createElement("div", { className: "page-header" },
                React.createElement("h1", null, "Add a Book")),
            React.createElement("form", { className: "form-group", action: "#" },
                React.createElement("div", { className: "row form-group" },
                    React.createElement("div", { className: "col-xs-2" }),
                    React.createElement("div", { className: "col-xs-2" },
                        React.createElement("label", null, "Book Title:")),
                    React.createElement("div", { className: "col-xs-6" },
                        React.createElement("input", { value: bookTitle, onChange: function (ev) { return _this.bookTitleChange(ev); }, className: "form-control", id: "bookTitle", type: "text" })),
                    React.createElement("div", { className: "col-xs-2" })),
                React.createElement("div", { className: "row form-group" },
                    React.createElement("div", { className: "col-xs-2" }),
                    React.createElement("div", { className: "col-xs-2" },
                        React.createElement("label", null, "Content:")),
                    React.createElement("div", { className: "col-xs-6" },
                        React.createElement("input", { value: bookContent, onChange: function (ev) { return _this.bookContentChange(ev); }, className: "form-control", id: "content", type: "text" })),
                    React.createElement("div", { className: "col-xs-2" })),
                React.createElement("div", { className: "row form-group" },
                    React.createElement("div", { className: "col-xs-2" }),
                    React.createElement("div", { className: "col-xs-2" },
                        React.createElement("label", null, "ISBN:")),
                    React.createElement("div", { className: "col-xs-6" },
                        React.createElement("input", { value: bookISBN, onChange: function (ev) { return _this.bookISBNChange(ev); }, className: "form-control", id: "isbn", type: "text" })),
                    React.createElement("div", { className: "col-xs-2" })),
                React.createElement("div", { className: "row form-group" },
                    React.createElement("div", { className: "col-xs-6 " }),
                    React.createElement("div", { className: "col-xs-2" },
                        React.createElement("button", { onClick: function () { return _this.addBookFunction(); }, type: "submit", className: "btn btn-default" }, "Submit")),
                    React.createElement("div", { className: "col-xs-4" })))));
    };
    return AddBook;
}(React.Component));
exports.AddBook = AddBook;
//# sourceMappingURL=addBook.component.js.map