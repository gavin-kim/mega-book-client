"use strict";
var React = require("react");
var ReactDOM = require("react-dom");
// import Hello component from ./component/init.tsx (export Hello)
var bookList_component_1 = require("./components/bookList.component");
var navBar_component_1 = require("./components/navBar.component");
var books;
/**
 * Send AJAX GET HttpRequest.
 * When a html file is load, invoke function
 *
 * @param url a html file path
 * @param func function to invoke when it's loaded
 */
function loadHtml(url, func) {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("load", func);
    // method, url, async : All file must be loaded before page is created
    xhr.open("GET", url, true);
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.send();
}
function init() {
    ReactDOM.render(React.createElement(navBar_component_1.NavBar, { title: "Mega Book" }), document.querySelector("#nav"));
    loadHtml("http://mega-book.azurewebsites.net/api/book", function () {
        if (this.status == 200) {
            console.log(this);
            books = JSON.parse(this.response);
            ReactDOM.render(React.createElement(bookList_component_1.BookList, { books: books }), document.querySelector("#main"));
        }
    });
}
init();
//# sourceMappingURL=index.js.map