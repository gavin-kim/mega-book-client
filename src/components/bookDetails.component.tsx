import * as React from "react"
import {Book} from "./bookList.component";
import {ReviewList} from "./reviewList.component";

export interface BookDetailsProps {
    book: Book
}

export class BookDetails extends React.Component<BookDetailsProps, {} > {
    render () {
        return <div>
            bookname isbn content .....
            <ReviewList reviews={this.props.book.reviews} />
        </div>
    }
}