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
        return (<div className="modal fade" id="myModal" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                            <h4 className="modal-title">Add Review</h4>
                        </div>
                        <div className="modal-body">
                            <form className="form-group">
                                <div className="row form-group">
                                    <label>Reviewer Name:</label>
                                    <input className="form-control" id="reviewerName" type="text"/>
                                </div>
                                <div className="row form-group">
                                    <label>Content:</label>
                                    <input className="form-control" id="reviewerContent" type="text"/>
                                </div>
                                <div className="form-group">
                                    <label>Rating:</label>
                                    <select className="form-control" id="rating">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                        <option>9</option>
                                        <option>10</option>
                                    </select>
                                </div>
                                <div className="row form-group">
                                    <button type="submit" className="btn btn-default">Submit</button>
                                    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>);
    };
    return AddReview;
}(React.Component));
exports.AddReview = AddReview;
