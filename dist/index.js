/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(2);
	// import Hello component from ./component/init.tsx (export Hello)
	var bookList_component_1 = __webpack_require__(3);
	var navBar_component_1 = __webpack_require__(6);
	var addReview_component_1 = __webpack_require__(9);
	var Root = (function (_super) {
	    __extends(Root, _super);
	    function Root(props) {
	        var _this = _super.call(this, props) || this;
	        _this.requestBookList = function (func) {
	            var xhr = new XMLHttpRequest();
	            xhr.addEventListener("load", function (ev) { _this.responseHandler(ev, func); });
	            // method, url, async : All file must be loaded before page is created
	            xhr.open("GET", "http://mega-book.azurewebsites.net/api/book", true);
	            xhr.send();
	        };
	        _this.responseHandler = function (ev, func) {
	            if (ev.target.status == 200) {
	                Root.books = JSON.parse(ev.target.response);
	                if (func)
	                    func();
	            }
	        };
	        _this.renderBookList = function () {
	            console.log(Root.books);
	            ReactDOM.unmountComponentAtNode(document.querySelector("#content"));
	            ReactDOM.render(React.createElement(bookList_component_1.BookList, { books: Root.books }), document.querySelector("#content"));
	        };
	        _this.requestBookList(_this.renderBookList);
	        return _this;
	    }
	    Root.prototype.render = function () {
	        return React.createElement("div", null,
	            React.createElement(navBar_component_1.NavBar, { title: "Mega Book", root: this }),
	            React.createElement("div", { id: "content", className: "container" }),
	            React.createElement(addReview_component_1.AddReview, null));
	    };
	    return Root;
	}(React.Component));
	exports.Root = Root;
	function init() {
	    ReactDOM.render(React.createElement(Root, null), document.querySelector("#root"));
	}
	init();


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(2);
	var bookDetails_component_1 = __webpack_require__(4);
	// declare class for React.Component and export
	var BookList = (function (_super) {
	    __extends(BookList, _super);
	    function BookList(props) {
	        return _super.call(this, props) || this;
	    }
	    BookList.prototype.showBookDetails = function (book) {
	        ReactDOM.unmountComponentAtNode(document.querySelector("#content"));
	        ReactDOM.render(React.createElement(bookDetails_component_1.BookDetails, { book: book }), document.querySelector("#content"));
	    };
	    BookList.prototype.render = function () {
	        var _this = this;
	        var list = Array();
	        this.props.books.forEach(function (book) {
	            list.push(React.createElement("button", { type: "button", className: "list-group-item", onClick: function () { return _this.showBookDetails(book); } },
	                "Name: ",
	                book.name,
	                " ISBN: ",
	                book.isbn,
	                " "));
	        });
	        return (React.createElement("div", null,
	            React.createElement("div", { className: "page-header" },
	                React.createElement("h1", null, "Book List")),
	            React.createElement("div", { className: "list-group" }, list)));
	    };
	    return BookList;
	}(React.Component));
	exports.BookList = BookList;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var reviewList_component_1 = __webpack_require__(5);
	var BookDetails = (function (_super) {
	    __extends(BookDetails, _super);
	    function BookDetails() {
	        return _super.apply(this, arguments) || this;
	    }
	    BookDetails.prototype.render = function () {
	        return React.createElement("div", null,
	            React.createElement("div", { className: "page-header" },
	                React.createElement("h1", { className: "book-details-title" },
	                    this.props.book.name,
	                    "  -",
	                    React.createElement("small", null, new Date(this.props.book.releaseDate).toDateString()))),
	            React.createElement("div", { className: "boot-details-content well well-sm" }, this.props.book.content),
	            React.createElement(reviewList_component_1.ReviewList, { reviews: this.props.book.Reviews }));
	    };
	    return BookDetails;
	}(React.Component));
	exports.BookDetails = BookDetails;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var ReviewList = (function (_super) {
	    __extends(ReviewList, _super);
	    function ReviewList() {
	        return _super.apply(this, arguments) || this;
	    }
	    ReviewList.prototype.render = function () {
	        var totalRating = 0;
	        var list = Array();
	        this.props.reviews.forEach(function (review) {
	            totalRating += review.rating;
	            list.push(React.createElement("div", { className: "well well-sm review-item" },
	                React.createElement("h5", null,
	                    "Rating: ",
	                    review.rating),
	                React.createElement("div", null,
	                    "- ",
	                    review.reviewerName,
	                    " ",
	                    React.createElement("small", null, new Date(review.reviewDate).toDateString())),
	                React.createElement("div", null, review.content)));
	        });
	        var avgRating = totalRating / list.length;
	        return React.createElement("div", { className: "well well-sm review-container" },
	            React.createElement("h4", null,
	                " Average Rating: ",
	                Number.NaN == avgRating ? 0 : avgRating,
	                ", ",
	                list.length,
	                " reviews"),
	            React.createElement("div", { className: "review-items" }, list));
	    };
	    return ReviewList;
	}(React.Component));
	exports.ReviewList = ReviewList;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(2);
	var addBook_component_1 = __webpack_require__(7);
	var searchReview_component_1 = __webpack_require__(8);
	var NavBar = (function (_super) {
	    __extends(NavBar, _super);
	    function NavBar() {
	        var _this = _super.apply(this, arguments) || this;
	        _this.showAddBook = function () {
	            ReactDOM.unmountComponentAtNode(document.querySelector("#content"));
	            ReactDOM.render(React.createElement(addBook_component_1.AddBook, { root: _this.props.root }), document.querySelector("#content"));
	        };
	        _this.showSearchReview = function () {
	            ReactDOM.unmountComponentAtNode(document.querySelector("#content"));
	            ReactDOM.render(React.createElement(searchReview_component_1.SearchReview, null), document.querySelector("#content"));
	        };
	        _this.showBookList = function () {
	            _this.props.root.renderBookList();
	        };
	        return _this;
	    }
	    NavBar.prototype.render = function () {
	        return (React.createElement("nav", { className: "navbar navbar-default" },
	            React.createElement("div", { className: "container" },
	                React.createElement("div", { className: "row" },
	                    React.createElement("div", { className: "navbar-header" },
	                        React.createElement("a", { className: "navbar-brand", onClick: this.showBookList }, this.props.title)),
	                    React.createElement("ul", { className: "nav navbar-nav" },
	                        React.createElement("li", null,
	                            React.createElement("a", { onClick: this.showAddBook }, "Add Book")),
	                        React.createElement("li", null,
	                            React.createElement("a", { onClick: this.showSearchReview }, "Search Reviews")))))));
	    };
	    return NavBar;
	}(React.Component));
	exports.NavBar = NavBar;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var AddBook = (function (_super) {
	    __extends(AddBook, _super);
	    function AddBook(props) {
	        var _this = _super.call(this, props) || this;
	        _this.addBookFunction = function () {
	            var json = {
	                name: _this.state.bookTitle,
	                content: _this.state.bookContent,
	                isbn: _this.state.bookISBN
	            };
	            var jsonString = JSON.stringify(json);
	            var addBookPostRequest = function (url, jsonString, func) {
	                var xhr = new XMLHttpRequest();
	                xhr.addEventListener("load", func);
	                // method, url, async : All file must be loaded before page is created
	                xhr.open("POST", url, true);
	                xhr.setRequestHeader("Content-Type", "application/json");
	                xhr.send(jsonString);
	            };
	            addBookPostRequest("http://mega-book.azurewebsites.net/api/book", jsonString, function (response) {
	                console.log(response);
	                if (response.target.status == 200) {
	                    _this.props.root.requestBookList(null);
	                }
	            });
	        };
	        _this.state = {
	            bookTitle: "",
	            bookContent: "",
	            bookISBN: ""
	        };
	        return _this;
	    }
	    AddBook.prototype.bookTitleChange = function (ev) {
	        this.setState({
	            bookTitle: ev.target.value
	        });
	    };
	    AddBook.prototype.bookContentChange = function (ev) {
	        this.setState({
	            bookContent: ev.target.value
	        });
	    };
	    AddBook.prototype.bookISBNChange = function (ev) {
	        this.setState({
	            bookISBN: ev.target.value
	        });
	    };
	    AddBook.prototype.render = function () {
	        var _this = this;
	        var bookTitle = this.state.bookTitle;
	        var bookContent = this.state.bookContent;
	        var bookISBN = this.state.bookISBN;
	        return (React.createElement("div", null,
	            React.createElement("div", { className: "page-header" },
	                React.createElement("h1", null, "Add a Book")),
	            React.createElement("form", { className: "form-group", action: "#" },
	                React.createElement("div", { className: "row form-group" },
	                    React.createElement("div", { className: "col-xs-2" }),
	                    React.createElement("div", { className: "col-xs-2" },
	                        React.createElement("label", null, "Book Title:")),
	                    React.createElement("div", { className: "col-xs-6" },
	                        React.createElement("input", { value: bookTitle, onChange: function (ev) { return _this.bookTitleChange(ev); }, className: "form-control", id: "bookTitle", type: "text" })),
	                    React.createElement("div", { className: "col-xs-2" })),
	                React.createElement("div", { className: "row form-group" },
	                    React.createElement("div", { className: "col-xs-2" }),
	                    React.createElement("div", { className: "col-xs-2" },
	                        React.createElement("label", null, "Content:")),
	                    React.createElement("div", { className: "col-xs-6" },
	                        React.createElement("input", { value: bookContent, onChange: function (ev) { return _this.bookContentChange(ev); }, className: "form-control", id: "content", type: "text" })),
	                    React.createElement("div", { className: "col-xs-2" })),
	                React.createElement("div", { className: "row form-group" },
	                    React.createElement("div", { className: "col-xs-2" }),
	                    React.createElement("div", { className: "col-xs-2" },
	                        React.createElement("label", null, "ISBN:")),
	                    React.createElement("div", { className: "col-xs-6" },
	                        React.createElement("input", { value: bookISBN, onChange: function (ev) { return _this.bookISBNChange(ev); }, className: "form-control", id: "isbn", type: "text" })),
	                    React.createElement("div", { className: "col-xs-2" })),
	                React.createElement("div", { className: "row form-group" },
	                    React.createElement("div", { className: "col-xs-6 " }),
	                    React.createElement("div", { className: "col-xs-2" },
	                        React.createElement("button", { onClick: function () { return _this.addBookFunction(); }, type: "submit", className: "btn btn-default" }, "Submit")),
	                    React.createElement("div", { className: "col-xs-4" })))));
	    };
	    return AddBook;
	}(React.Component));
	exports.AddBook = AddBook;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(2);
	var reviewList_component_1 = __webpack_require__(5);
	var SearchReview = (function (_super) {
	    __extends(SearchReview, _super);
	    function SearchReview(props) {
	        var _this = _super.call(this, props) || this;
	        _this.search = function () {
	            var url = "http://mega-book.azurewebsites.net/api/review/?";
	            url += _this.state.bookId ? "bookId=" + _this.state.bookId : "";
	            url += _this.state.bookName ? "&bookName=" + _this.state.bookName : "";
	            url += _this.state.reviewerName ? "&reviewer=" + _this.state.reviewerName : "";
	            var xhr = new XMLHttpRequest();
	            xhr.addEventListener("load", function (ev) { _this.responseHandler(ev); });
	            // method, url, async : All file must be loaded before page is created
	            xhr.open("GET", url, true);
	            xhr.send();
	            _this.setState({
	                bookId: "",
	                bookName: "",
	                reviewerName: "",
	            });
	        };
	        _this.state = {
	            bookId: "",
	            bookName: "",
	            reviewerName: ""
	        };
	        return _this;
	    }
	    SearchReview.prototype.responseHandler = function (ev) {
	        if (ev.target.status == 200) {
	            var target = document.querySelector("#search-review-result");
	            ReactDOM.unmountComponentAtNode(target);
	            ReactDOM.render(React.createElement(reviewList_component_1.ReviewList, { reviews: JSON.parse(ev.target.response) }), target);
	        }
	    };
	    SearchReview.prototype.bookIdChange = function (ev) {
	        this.setState({
	            bookId: ev.target.value
	        });
	    };
	    SearchReview.prototype.bookNameChange = function (ev) {
	        this.setState({
	            bookName: ev.target.value
	        });
	    };
	    SearchReview.prototype.reviewerNameChange = function (ev) {
	        this.setState({
	            reviewerName: ev.target.value
	        });
	    };
	    SearchReview.prototype.render = function () {
	        var _this = this;
	        var bookId = this.state.bookId;
	        var bookName = this.state.bookName;
	        var reviewerName = this.state.reviewerName;
	        return (React.createElement("div", null,
	            React.createElement("div", { className: "page-header" },
	                React.createElement("h1", null, "Search Reviews")),
	            React.createElement("div", { className: "row well" },
	                React.createElement("div", { className: "col-xs-3" },
	                    React.createElement("input", { type: "text", className: "form-control", id: "search-review-book-id", value: bookId, onChange: function (ev) { return _this.bookIdChange(ev); }, placeholder: "Book ID" })),
	                React.createElement("div", { className: "col-xs-3" },
	                    React.createElement("input", { type: "text", className: "form-control", id: "search-review-book-name", value: bookName, onChange: function (ev) { return _this.bookNameChange(ev); }, placeholder: "Book Name" })),
	                React.createElement("div", { className: "col-xs-3" },
	                    React.createElement("input", { type: "text", className: "form-control", id: "search-review-reviewer-name", value: reviewerName, onChange: function (ev) { return _this.reviewerNameChange(ev); }, placeholder: "Reviewer Name" })),
	                React.createElement("div", { className: "col-xs-3" },
	                    React.createElement("button", { type: "button", className: "btn btn-primary", onClick: this.search }, "Search"))),
	            React.createElement("hr", null),
	            React.createElement("div", { id: "search-review-result" })));
	    };
	    return SearchReview;
	}(React.Component));
	exports.SearchReview = SearchReview;


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var AddReview = (function (_super) {
	    __extends(AddReview, _super);
	    function AddReview() {
	        return _super.apply(this, arguments) || this;
	    }
	    AddReview.prototype.render = function () {
	        return (React.createElement("div", { className: "modal fade", id: "myModal", role: "dialog" },
	            React.createElement("div", { className: "modal-dialog" },
	                React.createElement("div", { className: "modal-content" },
	                    React.createElement("div", { className: "modal-header" },
	                        React.createElement("button", { type: "button", className: "close", "data-dismiss": "modal" }, "\u00D7"),
	                        React.createElement("h4", { className: "modal-title" }, "Add Review")),
	                    React.createElement("div", { className: "modal-body" },
	                        React.createElement("form", { className: "form-group" },
	                            React.createElement("div", { className: "row form-group" },
	                                React.createElement("label", null, "Reviewer Name:"),
	                                React.createElement("input", { className: "form-control", id: "reviewerName", type: "text" })),
	                            React.createElement("div", { className: "row form-group" },
	                                React.createElement("label", null, "Content:"),
	                                React.createElement("input", { className: "form-control", id: "reviewerContent", type: "text" })),
	                            React.createElement("div", { className: "form-group" },
	                                React.createElement("label", null, "Rating:"),
	                                React.createElement("select", { className: "form-control", id: "rating" },
	                                    React.createElement("option", null, "1"),
	                                    React.createElement("option", null, "2"),
	                                    React.createElement("option", null, "3"),
	                                    React.createElement("option", null, "4"),
	                                    React.createElement("option", null, "5"),
	                                    React.createElement("option", null, "6"),
	                                    React.createElement("option", null, "7"),
	                                    React.createElement("option", null, "8"),
	                                    React.createElement("option", null, "9"),
	                                    React.createElement("option", null, "10"))),
	                            React.createElement("div", { className: "row form-group" },
	                                React.createElement("button", { type: "submit", className: "btn btn-default" }, "Submit"),
	                                React.createElement("button", { type: "button", className: "btn btn-default", "data-dismiss": "modal" }, "Close"))))))));
	    };
	    return AddReview;
	}(React.Component));
	exports.AddReview = AddReview;


/***/ }
/******/ ]);
//# sourceMappingURL=index.js.map