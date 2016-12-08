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
	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(2);
	// import Hello component from ./component/init.tsx (export Hello)
	var bookList_component_1 = __webpack_require__(3);
	var navBar_component_1 = __webpack_require__(4);
	var addBook_component_1 = __webpack_require__(5);
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
	    ReactDOM.render(React.createElement(addBook_component_1.AddBook, null), document.querySelector("#addBookTest"));
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
	// declare class for React.Component and export
	var BookList = (function (_super) {
	    __extends(BookList, _super);
	    function BookList() {
	        return _super.apply(this, arguments) || this;
	    }
	    BookList.prototype.render = function () {
	        var list = Array();
	        this.props.books.forEach(function (book) {
	            list.push(React.createElement("button", { type: "button", className: "list-group-item" },
	                "Name: ",
	                book.name,
	                " ISBN: ",
	                book.isbn,
	                " "));
	        });
	        return React.createElement("div", { className: "list-group" }, list);
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
	var NavBar = (function (_super) {
	    __extends(NavBar, _super);
	    function NavBar() {
	        return _super.apply(this, arguments) || this;
	    }
	    NavBar.prototype.render = function () {
	        return React.createElement("nav", { className: "navbar navbar-default" },
	            React.createElement("div", { className: "container-fluid" },
	                React.createElement("div", { className: "navbar-header" },
	                    React.createElement("a", { className: "navbar-brand", href: "#" }, this.props.title)),
	                React.createElement("div", { className: "collapse navbar-collapse", id: "bs-example-navbar-collapse-1" },
	                    React.createElement("ul", { className: "nav navbar-nav" },
	                        React.createElement("li", null,
	                            React.createElement("a", { href: "#" }, "Add Book")),
	                        React.createElement("li", null,
	                            React.createElement("a", { href: "#" }, "Search Reviews"))))));
	    };
	    return NavBar;
	}(React.Component));
	exports.NavBar = NavBar;


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
	var AddBook = (function (_super) {
	    __extends(AddBook, _super);
	    function AddBook() {
	        return _super.apply(this, arguments) || this;
	    }
	    AddBook.prototype.render = function () {
	        return React.createElement("div", { className: "container" },
	            React.createElement("form", { className: "form-group" },
	                React.createElement("div", { className: "row form-group" },
	                    React.createElement("div", { className: "col-xs-2 col-sm-2 col-md-2 col-lg-2 " }),
	                    React.createElement("div", { className: "col-xs-2 col-sm-2 col-md-2 col-lg-2 " },
	                        React.createElement("label", null, "Book Title:")),
	                    React.createElement("div", { className: "col-xs-6 col-sm-6 col-md-6 col-lg-6 " },
	                        React.createElement("input", { className: "form-control", id: "bookTitle", type: "text" })),
	                    React.createElement("div", { className: "col-xs-2 col-sm-2 col-md-2 col-lg-2" })),
	                React.createElement("div", { className: "row form-group" },
	                    React.createElement("div", { className: "col-xs-2 col-sm-2 col-md-2 col-lg-2 " }),
	                    React.createElement("div", { className: "col-xs-2 col-sm-2 col-md-2 col-lg-2 " },
	                        React.createElement("label", null, "Content:")),
	                    React.createElement("div", { className: "col-xs-6 col-sm-6 col-md-6 col-lg-6 " },
	                        React.createElement("input", { className: "form-control", id: "content", type: "text" })),
	                    React.createElement("div", { className: "col-xs-2 col-sm-2 col-md-2 col-lg-2" })),
	                React.createElement("div", { className: "row form-group" },
	                    React.createElement("div", { className: "col-xs-2 col-sm-2 col-md-2 col-lg-2 " }),
	                    React.createElement("div", { className: "col-xs-2 col-sm-2 col-md-2 col-lg-2 " },
	                        React.createElement("label", null, "ISBN:")),
	                    React.createElement("div", { className: "col-xs-6 col-sm-6 col-md-6 col-lg-6 " },
	                        React.createElement("input", { className: "form-control", id: "isbn", type: "text" })),
	                    React.createElement("div", { className: "col-xs-2 col-sm-2 col-md-2 col-lg-2" })),
	                React.createElement("div", { className: "row form-group" },
	                    React.createElement("div", { className: "col-xs-6 col-sm-6 col-md-6 col-lg-6 " }),
	                    React.createElement("div", { className: "col-xs-2 col-sm-2 col-md-2 col-lg-2" },
	                        React.createElement("button", { type: "submit", className: "btn btn-default" }, "Submit")),
	                    React.createElement("div", { className: "col-xs-4 col-sm-4 col-md-4 col-lg-4" }))));
	    };
	    return AddBook;
	}(React.Component));
	exports.AddBook = AddBook;


/***/ }
/******/ ]);
//# sourceMappingURL=first.js.map