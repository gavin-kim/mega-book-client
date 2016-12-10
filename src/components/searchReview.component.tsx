import * as React from "react";
import * as ReactDOM from "react-dom";
import {ReviewList} from "./reviewList.component";

export interface Review {
    id: number,
    reviewerName: string,
    reviewDate: Date,
    content: string,
    rating: number,
    bookId: number
}

export interface BookDetailsProps{
}

export class SearchReview extends React.Component<BookDetailsProps, {} > {

    state: {
        bookId: string,
        bookName: string,
        reviewerName: string
    };

    constructor(props: BookDetailsProps) {

        super(props);
        this.state = {
            bookId: "",
            bookName: "",
            reviewerName: ""
        };
    }

    search = () => {

        let url = "http://mega-book.azurewebsites.net/api/review/?";
        url += this.state.bookId ? "bookId=" + this.state.bookId : "";
        url += this.state.bookName ? "&bookName=" + this.state.bookName : "";
        url += this.state.reviewerName ? "&reviewer=" + this.state.reviewerName : "";

        let xhr = new XMLHttpRequest();

        xhr.addEventListener("load", (ev: any) => {this.responseHandler(ev)});
        // method, url, async : All file must be loaded before page is created
        xhr.open("GET", url, true);
        xhr.send();

        this.setState({
            bookId: "",
            bookName: "",
            reviewerName: "",
        });
    };

    responseHandler(ev: any) {
        if (ev.target.status == 200) {

            let target = document.querySelector("#search-review-result");

            ReactDOM.unmountComponentAtNode(target);

            ReactDOM.render(
                <ReviewList reviews={JSON.parse(ev.target.response)}/>,
                target
            )
        }
    }

    bookIdChange(ev: any) : void {
        this.setState({
            bookId: ev.target.value
        });
    }
    bookNameChange(ev: any) : void {
        this.setState({
            bookName: ev.target.value
        });
    }
    reviewerNameChange(ev: any) : void {
        this.setState({
            reviewerName: ev.target.value
        });
    }


    render() {
        const bookId = this.state.bookId;
        const bookName = this.state.bookName;
        const reviewerName = this.state.reviewerName;

        return (
            <div>
                <div className="page-header">
                    <h1>Search Reviews</h1>
                </div>
                <div className="row well">
                    <div className="col-xs-3">
                        <input type="text" className="form-control" id="search-review-book-id"
                               value={bookId} onChange={(ev) => this.bookIdChange(ev)} placeholder="Book ID" />
                    </div>
                    <div className="col-xs-3">
                        <input type="text" className="form-control" id="search-review-book-name"
                               value={bookName} onChange={(ev) => this.bookNameChange(ev)} placeholder="Book Name" />
                    </div>
                    <div className="col-xs-3">
                        <input type="text" className="form-control" id="search-review-reviewer-name"
                               value={reviewerName} onChange={(ev) => this.reviewerNameChange(ev)} placeholder="Reviewer Name" />
                    </div>
                    <div className="col-xs-3">
                        <button type="button" className="btn btn-primary" onClick={this.search}>Search</button>
                    </div>
                </div>
                <hr />
                <div id="search-review-result"></div>
            </div>
        );
    }
}