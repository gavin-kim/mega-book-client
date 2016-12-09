import * as React from "react";
import * as ReactDOM from "react-dom";

export interface BookDetailsProps{
}

export class BookDetails extends React.Component<BookDetailsProps, {} > {
    render () {
        return <div className="container">
            <div className="input-group">
              <span className="input-group-btn">
                <button className="btn btn-default" type="button">Search</button>
              </span>
                <input type="text" id="searchReviewQuery" className="form-control" placeholder="Search Review" />
            </div>
        </div>;
    }
}