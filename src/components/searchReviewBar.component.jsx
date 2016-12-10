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
        return <div className="container">
            <div className="input-group">
              <span className="input-group-btn">
                <button className="btn btn-default" type="button">Search</button>
              </span>
                <input type="text" id="searchReviewQuery" className="form-control" placeholder="Search Review"/>
            </div>
        </div>;
    };
    return SearchReviewBar;
}(React.Component));
exports.SearchReviewBar = SearchReviewBar;
