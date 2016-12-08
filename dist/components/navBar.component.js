"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var NavBar = (function (_super) {
    __extends(NavBar, _super);
    function NavBar() {
        return _super.apply(this, arguments) || this;
    }
    NavBar.prototype.render = function () {
        return React.createElement("nav", { className: "navbar navbar-default" },
            React.createElement("div", { className: "container-fluid" },
                React.createElement("div", { className: "navbar-header" },
                    React.createElement("a", { className: "navbar-brand", href: "#" }, this.props.title)),
                React.createElement("div", { className: "collapse navbar-collapse", id: "bs-example-navbar-collapse-1" },
                    React.createElement("ul", { className: "nav navbar-nav" },
                        React.createElement("li", null,
                            React.createElement("a", { href: "#" }, "Add Book")),
                        React.createElement("li", null,
                            React.createElement("a", { href: "#" }, "Search Reviews"))))));
    };
    return NavBar;
}(React.Component));
exports.NavBar = NavBar;
//# sourceMappingURL=navBar.component.js.map