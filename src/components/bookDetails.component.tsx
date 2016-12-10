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
            <ReviewList reviews={this.props.book.Reviews} />
        </div>
    }
}