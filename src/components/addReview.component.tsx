import * as React from "react"

export interface AddReviewProps {
}
export class AddReview extends React.Component<AddReviewProps, {}> {
    render() {
        return <div className="container">
            <form className="form-group">

                <div className="row form-group">
                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 "></div>
                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 "><label>Reviewer Name:</label></div>
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 "><input className="form-control" id="reviewerName" type="text" /></div>
                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>
                </div>

                <div className="row form-group">
                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 "></div>
                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 "><label>Content:</label></div>
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 "><input className="form-control" id="reviewerContent" type="text" /></div>
                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>
                </div>

                <div className="form-group">
                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 "></div>
                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 ">
                        <label>Rating:</label>
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
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
                </div>

                <div className="row form-group">
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 "></div>
                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"><button type="submit" className="btn btn-default">Submit</button></div>
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
                </div>

            </form>
        </div>;
    }
}