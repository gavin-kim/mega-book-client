import * as React from "react"
import {Book} from "./bookList.component";
import {ReviewList} from "./reviewList.component";

export interface BookDetailsProps {
    book: Book
}

export class BookDetails extends React.Component<BookDetailsProps, {} > {
    render () {
        return <div>
            <div className="page-header">
                <h1 className="book-details-title">{this.props.book.name}  -
                    <small>{new Date(this.props.book.releaseDate).toDateString()}</small>
                </h1>
            </div>
            <div className="boot-details-content well well-sm">{this.props.book.content}</div>
            <hr />
            <button data-toggle="modal" data-target="#modal-add-review" type="button" className="btn btn-warning" >Add Review</button>
            <br/>
            <ReviewList reviews={this.props.book.Reviews} />
        </div>
    }
}