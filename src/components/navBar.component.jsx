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
        return <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#">{this.props.title}</a>
                </div>
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav">
                        <li><a href="#">Add Book</a></li>
                        <li><a href="#">Search Reviews</a></li>
                    </ul>
                </div>
            </div>
        </nav>;
    };
    return NavBar;
}(React.Component));
exports.NavBar = NavBar;
