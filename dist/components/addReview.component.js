"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var AddReview = (function (_super) {
    __extends(AddReview, _super);
    function AddReview() {
        return _super.apply(this, arguments) || this;
    }
    AddReview.prototype.render = function () {
        return (React.createElement("div", { className: "modal fade", id: "modal-add-review", role: "dialog" },
            React.createElement("div", { className: "modal-dialog", role: "document" },
                React.createElement("div", { className: "modal-content" },
                    React.createElement("div", { className: "modal-header" },
                        React.createElement("button", { type: "button", className: "close", "data-dismiss": "modal" }, "\u00D7"),
                        React.createElement("h4", { className: "modal-title" }, "Add Review")),
                    React.createElement("div", { className: "modal-body" },
                        React.createElement("form", null,
                            React.createElement("div", { className: "form-group" },
                                React.createElement("label", null, "Reviewer Name:"),
                                React.createElement("input", { className: "form-control", id: "reviewer-name", type: "text" })),
                            React.createElement("div", { className: "form-group" },
                                React.createElement("label", null, "Content:"),
                                React.createElement("input", { className: "form-control", id: "content", type: "text" })),
                            React.createElement("div", { className: "form-group" },
                                React.createElement("label", null, "Rating:"),
                                React.createElement("select", { className: "form-control", id: "rating" },
                                    React.createElement("option", null, "1"),
                                    React.createElement("option", null, "2"),
                                    React.createElement("option", null, "3"),
                                    React.createElement("option", null, "4"),
                                    React.createElement("option", null, "5"),
                                    React.createElement("option", null, "6"),
                                    React.createElement("option", null, "7"),
                                    React.createElement("option", null, "8"),
                                    React.createElement("option", null, "9"),
                                    React.createElement("option", null, "10"))),
                            React.createElement("div", { className: "form-group" },
                                React.createElement("button", { type: "submit", className: "btn btn-info" }, "Submit"))))))));
    };
    return AddReview;
}(React.Component));
exports.AddReview = AddReview;
//# sourceMappingURL=addReview.component.js.map