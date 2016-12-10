"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var ReactDOM = require("react-dom");
var addBook_component_1 = require("./addBook.component");
var bookList_component_1 = require("./bookList.component");
var searchReview_component_1 = require("./searchReview.component");
var NavBar = (function (_super) {
    __extends(NavBar, _super);
    function NavBar() {
        var _this = _super.apply(this, arguments) || this;
        _this.showAddBook = function () {
            ReactDOM.render(<addBook_component_1.AddBook />, document.querySelector("#main"));
        };
        _this.showSearchReview = function () {
            var loadHtml = function (url, func) {
                var xhr = new XMLHttpRequest();
                xhr.addEventListener("load", func);
                // method, url, async : All file must be loaded before page is created
                xhr.open("GET", url, true);
                xhr.setRequestHeader("cache-control", "no-cache");
                xhr.send();
            };
            loadHtml("http://mega-book.azurewebsites.net/api/review", function () {
                if (this.status == 200) {
                    console.log(this);
                    var reviews = JSON.parse(this.response);
                    ReactDOM.render(<searchReview_component_1.SearchReview reviews={reviews}/>, document.querySelector("#main"));
                }
            });
        };
        /*
         showBookList = () => {
         ReactDOM.render(
         <BookList books={this.context.books}/>,
         document.querySelector("#main")
         );
         }
         */
        _this.showBookList = function () {
            var loadHtml = function (url, func) {
                var xhr = new XMLHttpRequest();
                xhr.addEventListener("load", func);
                // method, url, async : All file must be loaded before page is created
                xhr.open("GET", url, true);
                xhr.setRequestHeader("cache-control", "no-cache");
                xhr.send();
            };
            loadHtml("http://mega-book.azurewebsites.net/api/book", function () {
                if (this.status == 200) {
                    console.log(this);
                    var books = JSON.parse(this.response);
                    ReactDOM.render(<bookList_component_1.BookList books={books}/>, document.querySelector("#main"));
                }
            });
        };
        return _this;
    }
    NavBar.prototype.render = function () {
        return <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" onClick={this.showBookList}>{this.props.title}</a>
                </div>
                <ul className="nav navbar-nav">
                        <li><a onClick={this.showAddBook}>Add Book</a></li>
                        <li><a onClick={this.showSearchReview}>Search Reviews</a></li>
                </ul>
            </div>
        </nav>;
    };
    return NavBar;
}(React.Component));
exports.NavBar = NavBar;
