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
    reviews: Array<Review>
}

// declare interface and export
export interface BookListProps {
    books: Array<Book>
}

// declare class for React.Component and export
export class BookList extends React.Component<BookListProps, {} > {

    constructor(props : any) {
        super(props);
        this.state = {index: 0};

        // This binding is necessary to make 'this' work in the callback
        //this.showBookDetails = this.showBookDetails.bind(this);
    }

    showBookDetails = (book: Book) => {
        console.log(book);


        ReactDOM.render(

            <BookDetails book={book}/>,
            document.querySelector("#main")
        );

    }

    render() {

        let list = Array<any>();
        let self = this;

        this.props.books.forEach(function(book) {
            list.push(<button  type="button" onClick={() => self.showBookDetails(book)} className="list-group-item">
                Name: {book.name} ISBN: {book.isbn} </button>
            );
        });

        return <div className="list-group">{list}</div>;
    }
}

