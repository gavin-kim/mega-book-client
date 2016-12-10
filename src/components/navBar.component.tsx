import * as React from "react";
import * as ReactDOM from "react-dom";

import {AddBook} from "./addBook.component";
import {SearchReview} from "./searchReview.component";
import {Root} from "../index";

export interface NavBarProps {
    title: string,
    root: Root
}
export class NavBar extends React.Component<NavBarProps, {}> {

    showAddBook = () => {

        ReactDOM.unmountComponentAtNode(document.querySelector("#content"));

        ReactDOM.render(
            <AddBook root={this.props.root} />,
            document.querySelector("#content")
        );
    };

    showSearchReview = () => {

        ReactDOM.unmountComponentAtNode(document.querySelector("#content"));

        ReactDOM.render(
            <SearchReview />,
            document.querySelector("#content")
        );
    };

    showBookList = () => {
        this.props.root.renderBookList();
    };


    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="row">
                        <div className="navbar-header">
                            <a className="navbar-brand" onClick={this.showBookList}>{this.props.title}</a>
                        </div>
                        <ul className="nav navbar-nav">
                            <li><a onClick={this.showAddBook}>Add Book</a></li>
                            <li><a onClick={this.showSearchReview}>Search Reviews</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}