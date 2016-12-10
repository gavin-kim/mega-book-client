import * as React from "react";
import * as ReactDOM from "react-dom";

// import Hello component from ./component/init.tsx (export Hello)
import {BookList, Book} from "./components/bookList.component";
import {NavBar} from "./components/navBar.component";
import {AddReview} from "./components/addReview.component";


export  interface RootProps {

}

export class Root extends React.Component<RootProps, {} > {

    static books : Array<Book>;

    constructor(props: RootProps) {
        super(props);
        this.requestBookList(this.renderBookList);
    }

    requestBookList = (func: any) => {
        let xhr = new XMLHttpRequest();

        xhr.addEventListener("load", (ev: any) => {this.responseHandler(ev, func)});
        // method, url, async : All file must be loaded before page is created
        xhr.open("GET", "http://mega-book.azurewebsites.net/api/book", true);
        xhr.send();
    };

    responseHandler = (ev: any, func: any) => {

        if (ev.target.status == 200) {
            Root.books = JSON.parse(ev.target.response);

            if (func)
                func();
        }
    };

    renderBookList = () => {

        console.log(Root.books);

        ReactDOM.unmountComponentAtNode(document.querySelector("#content"));
        ReactDOM.render(
            <BookList books={Root.books} />,
            document.querySelector("#content")
        );
    };

    render() {
        return <div>
            <NavBar title="Mega Book" root={this}/>
            <div id="content" className="container"></div>
            <AddReview />
        </div>
    }
}

function init() {

    ReactDOM.render(
        <Root />,
        document.querySelector("#root")
    )
}

init();

