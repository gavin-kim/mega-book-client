import * as React from "react";
import * as ReactDOM from "react-dom";

// import Hello component from ./component/init.tsx (export Hello)
import {BookList, Book} from "./components/bookList.component";
import {NavBar} from "./components/navBar.component";

let books : any;


/**
 * Send AJAX GET HttpRequest.
 * When a html file is load, invoke function
 *
 * @param url a html file path
 * @param func function to invoke when it's loaded
 */

function loadHtml(url : string, func : any) {
    let xhr = new XMLHttpRequest();

    xhr.addEventListener("load", func);

    // method, url, async : All file must be loaded before page is created
    xhr.open("GET", url, true);
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.send();
}

function init() {

    ReactDOM.render(
        <NavBar title="Mega Book"/>,
        document.querySelector("#nav")
    );

    loadHtml("http://mega-book.azurewebsites.net/api/book", function() {
        if (this.status == 200) {
            console.log(this);
            books = JSON.parse(this.response);

            ReactDOM.render(
                <BookList books={books}/>,
                document.querySelector("#main")
            );
        }
    });
}

init();

