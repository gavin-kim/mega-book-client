import * as React from "react";
import * as ReactDOM from "react-dom";
import {AddBook} from "./addBook.component";
import {BookList} from "./bookList.component";

export interface NavBarProps {
    title: string
}
export class NavBar extends React.Component<NavBarProps, {}> {

    showAddBook = () => {
        ReactDOM.render(
            <AddBook />,
            document.querySelector("#main")
        );
    }

    showBookList = () => {
        ReactDOM.render(
            <BookList books={this.context.books}/>,
            document.querySelector("#main")
        );
    }


    render() {
        return <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" onClick={this.showBookList}>{this.props.title}</a>
                </div>
                <ul className="nav navbar-nav">
                        <li><a onClick={this.showAddBook}>Add Book</a></li>
                        <li><a href="#">Search Reviews</a></li>
                </ul>
            </div>
        </nav>;
    }
}