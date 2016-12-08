"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var AddBook = (function (_super) {
    __extends(AddBook, _super);
    function AddBook() {
        return _super.apply(this, arguments) || this;
    }
    AddBook.prototype.render = function () {
        return React.createElement("div", { className: "container" },
            React.createElement("form", { className: "form-group" },
                React.createElement("div", { className: "row form-group" },
                    React.createElement("div", { className: "col-xs-2 col-sm-2 col-md-2 col-lg-2 " }),
                    React.createElement("div", { className: "col-xs-2 col-sm-2 col-md-2 col-lg-2 " },
                        React.createElement("label", null, "Book Title:")),
                    React.createElement("div", { className: "col-xs-6 col-sm-6 col-md-6 col-lg-6 " },
                        React.createElement("input", { className: "form-control", id: "bookTitle", type: "text" })),
                    React.createElement("div", { className: "col-xs-2 col-sm-2 col-md-2 col-lg-2" })),
                React.createElement("div", { className: "row form-group" },
                    React.createElement("div", { className: "col-xs-2 col-sm-2 col-md-2 col-lg-2 " }),
                    React.createElement("div", { className: "col-xs-2 col-sm-2 col-md-2 col-lg-2 " },
                        React.createElement("label", null, "Content:")),
                    React.createElement("div", { className: "col-xs-6 col-sm-6 col-md-6 col-lg-6 " },
                        React.createElement("input", { className: "form-control", id: "content", type: "text" })),
                    React.createElement("div", { className: "col-xs-2 col-sm-2 col-md-2 col-lg-2" })),
                React.createElement("div", { className: "row form-group" },
                    React.createElement("div", { className: "col-xs-2 col-sm-2 col-md-2 col-lg-2 " }),
                    React.createElement("div", { className: "col-xs-2 col-sm-2 col-md-2 col-lg-2 " },
                        React.createElement("label", null, "ISBN:")),
                    React.createElement("div", { className: "col-xs-6 col-sm-6 col-md-6 col-lg-6 " },
                        React.createElement("input", { className: "form-control", id: "isbn", type: "text" })),
                    React.createElement("div", { className: "col-xs-2 col-sm-2 col-md-2 col-lg-2" })),
                React.createElement("div", { className: "row form-group" },
                    React.createElement("div", { className: "col-xs-6 col-sm-6 col-md-6 col-lg-6 " }),
                    React.createElement("div", { className: "col-xs-2 col-sm-2 col-md-2 col-lg-2" },
                        React.createElement("button", { type: "submit", className: "btn btn-default" }, "Submit")),
                    React.createElement("div", { className: "col-xs-4 col-sm-4 col-md-4 col-lg-4" }))));
    };
    return AddBook;
}(React.Component));
exports.AddBook = AddBook;
//# sourceMappingURL=addBook.component.js.map