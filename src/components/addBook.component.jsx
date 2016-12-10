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
        return <div className="container">
            <form className="form-group">

                <div className="row form-group">
                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 "></div>
                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 "><label>Book Title:</label></div>
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 "><input className="form-control" id="bookTitle" type="text"/></div>
                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>
                </div>

                <div className="row form-group">
                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 "></div>
                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 "><label>Content:</label></div>
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 "><input className="form-control" id="content" type="text"/></div>
                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>
                </div>


                <div className="row form-group">
                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 "></div>
                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 "><label>ISBN:</label></div>
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 "><input className="form-control" id="isbn" type="text"/></div>
                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>
                </div>

                <div className="row form-group">
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 "></div>
                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"><button type="submit" className="btn btn-default">Submit</button></div>
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
                </div>

            </form>
        </div>;
    };
    return AddBook;
}(React.Component));
exports.AddBook = AddBook;
