import * as React from "react"
import {Root} from "../index";

export interface AddBookProps {
    root: Root
}
export class AddBook extends React.Component<AddBookProps, {}> {

    state: {
        bookTitle: string,
        bookContent: string,
        bookISBN: string
    };

    constructor(props: AddBookProps) {
        super(props);
        this.state = {
            bookTitle: "",
            bookContent: "",
            bookISBN: ""
        };
    }

    addBookFunction = () => {

        let json = {
            name: this.state.bookTitle,
            content: this.state.bookContent,
            isbn: this.state.bookISBN
        };
        let jsonString = JSON.stringify(json);


        let addBookPostRequest = (url : string, jsonString : string, func : any) => {

            let xhr = new XMLHttpRequest();

            xhr.addEventListener("load", func);

            // method, url, async : All file must be loaded before page is created
            xhr.open("POST", url, true);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.send(jsonString);

        };

        addBookPostRequest("http://mega-book.azurewebsites.net/api/book", jsonString, (response: any) => {
            console.log(response);
            if (response.target.status == 200) {
                this.props.root.requestBookList(null);
            }
        });

    };


    bookTitleChange(ev: any) : void {
        this.setState({
            bookTitle: ev.target.value
        });
    }
    bookContentChange(ev: any) : void {
        this.setState({
            bookContent: ev.target.value
        });
    }
    bookISBNChange(ev: any) : void {
        this.setState({
            bookISBN: ev.target.value
        });
    }

    render() {
        const bookTitle = this.state.bookTitle;
        const bookContent = this.state.bookContent;
        const bookISBN = this.state.bookISBN;

        return (
            <div>
                <div className="page-header">
                    <h1>Add a Book</h1>
                </div>
                <form className="form-group" action="#">
                    <div className="row form-group">
                        <div className="col-xs-2"></div>
                        <div className="col-xs-2"><label>Book Title:</label></div>
                        <div className="col-xs-6"><input value={bookTitle} onChange={(ev) => this.bookTitleChange(ev)} className="form-control" id="bookTitle" type="text" /></div>
                        <div className="col-xs-2"></div>
                    </div>

                    <div className="row form-group">
                        <div className="col-xs-2"></div>
                        <div className="col-xs-2"><label>Content:</label></div>
                        <div className="col-xs-6"><input value={bookContent} onChange={(ev) => this.bookContentChange(ev)} className="form-control" id="content" type="text" /></div>
                        <div className="col-xs-2"></div>
                    </div>


                    <div className="row form-group">
                        <div className="col-xs-2"></div>
                        <div className="col-xs-2"><label>ISBN:</label></div>
                        <div className="col-xs-6"><input value={bookISBN} onChange={(ev) => this.bookISBNChange(ev)} className="form-control" id="isbn" type="text"/></div>
                        <div className="col-xs-2"></div>
                    </div>

                    <div className="row form-group">
                        <div className="col-xs-6 "></div>
                        <div className="col-xs-2"><button onClick={ () => this.addBookFunction() } type="submit" className="btn btn-default">Submit</button></div>
                        <div className="col-xs-4"></div>
                    </div>
                </form>
            </div>
        );
    }
}