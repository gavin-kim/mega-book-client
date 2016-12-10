"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var SearchReviewBar = (function (_super) {
    __extends(SearchReviewBar, _super);
    function SearchReviewBar() {
        return _super.apply(this, arguments) || this;
    }
    SearchReviewBar.prototype.render = function () {
        return React.createElement("div", { className: "row well" },
            React.createElement("div", { className: "col-xs-3" },
                React.createElement("input", { type: "text", className: "form-control", placeholder: "Book ID" })),
            React.createElement("div", { className: "col-xs-3" },
                React.createElement("input", { type: "text", className: "form-control", placeholder: "Book Name" })),
            React.createElement("div", { className: "col-xs-3" },
                React.createElement("input", { type: "text", className: "form-control", placeholder: "Reviewer Name" })),
            React.createElement("div", { className: "col-xs-3" },
                React.createElement("button", { type: "button", className: "btn btn-primary", onClick:  > Search }),
                "button>"));
    };
    return SearchReviewBar;
}(React.Component));
exports.SearchReviewBar = SearchReviewBar;
//# sourceMappingURL=searchReviewBar.component.js.map