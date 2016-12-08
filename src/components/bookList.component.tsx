import * as React from "react";

export interface Review {
    id: number,
    reviewerName: string,
    reviewDate: Date,
    content: string,
    rating: number,
    bookId: number
}

export interface Book {
    id: number,
    name: string,
    releaseDate: Date,
    content: string
    isbn: string,
    reviews: Array<Review>
}

// declare interface and export
export interface BookListProps {
    books: Array<Book>
}

// declare class for React.Component and export
export class BookList extends React.Component<BookListProps, {} > {
    render() {

        let list = Array<any>();

        this.props.books.forEach(function(book) {
            list.push(<button type="button" className="list-group-item">
                Name: {book.name} ISBN: {book.isbn} </button>
            );
        });

        return <div className="list-group">{list}</div>;
    }
}

