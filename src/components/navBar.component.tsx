import * as React from "react"

export interface NavBarProps {
    title: string
}
export class NavBar extends React.Component<NavBarProps, {}> {
    render() {
        return <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#">{this.props.title}</a>
                </div>
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav">
                        <li><a href="#">Add Book</a></li>
                        <li><a href="#">Search Reviews</a></li>
                    </ul>
                </div>
            </div>
        </nav>;
    }
}