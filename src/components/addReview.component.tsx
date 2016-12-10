import * as React from "react"

export interface AddReviewProps {
}
export class AddReview extends React.Component<AddReviewProps, {}> {
    render() {
        return (
            <div className="modal fade" id="myModal" role="dialog">
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
                                    <input className="form-control" id="reviewerName" type="text" />
                                </div>
                                <div className="row form-group">
                                    <label>Content:</label>
                                    <input className="form-control" id="reviewerContent" type="text" />
                                </div>
                                <div className="form-group">
                                    <label>Rating:</label>
                                    <select className="form-control" id="rating" >
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
            </div>
        )
    }
}