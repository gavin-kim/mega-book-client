import * as React from "react"

export interface AddBookProps {
}
export class AddBook extends React.Component<AddBookProps, {}> {
    render() {
        return <div className="container">
            <form className="form-group">

                <div className="row form-group">
                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 "></div>
                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 "><label>Book Title:</label></div>
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 "><input className="form-control" id="bookTitle" type="text" /></div>
                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>
                </div>

                <div className="row form-group">
                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 "></div>
                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 "><label>Content:</label></div>
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 "><input className="form-control" id="content" type="text" /></div>
                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>
                </div>


                <div className="row form-group">
                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 "></div>
                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 "><label>ISBN:</label></div>
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 "><input className="form-control" id="isbn" type="text" /></div>
                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>
                </div>

                <div className="row form-group">
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 "></div>
                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"><button type="submit" className="btn btn-default">Submit</button></div>
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
                </div>

            </form>
        </div>;
    }
}