import * as React from "react";
import * as ReactDOM from "react-dom";
import {Review} from "./reviewList.component";
import {BookDetails} from "./bookDetails.component";



export interface Book {
    id: number,
    name: string,
    releaseDate: Date,
    content: string
    isbn: string,
    Reviews: Array<Review>
}

// declare interface and export
export interface BookListProps {
    books: Array<Book>
}

// declare class for React.Component and export
export class BookList extends React.Component<BookListProps, {} > {


    constructor(props : BookListProps) {
        super(props);
    }

    showBookDetails(book : Book) {

        ReactDOM.unmountComponentAtNode(document.querySelector("#content"));
        ReactDOM.render(
            <BookDetails book={book} />,
            document.querySelector("#content")
        );
    }

    render() {

        let list = Array<any>();

        this.props.books.forEach((book : Book) => {
            list.push(
                <button type="button" className="list-group-item" onClick={() => this.showBookDetails(book)}>
                Name: {book.name} ISBN: {book.isbn} </button>
            );
        });

        return (
            <div>
                <div className="page-header">
                    <h1>Book List</h1>
                </div>
                <div className="list-group">{list}</div>
            </div>
        );
    }
}

