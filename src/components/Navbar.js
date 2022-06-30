import React from "react";

export default function Navbar(props) {
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        {props.title}
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/about">About</a>
                            </li>
                        </ul>
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown button
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><button type="button" className="btn btn-outline-primary" id="primary" onClick={props.toggleMode}>Enable Blue Mode</button><br /></li>
                                <li><button type="button" className="btn btn-outline-danger" id="danger" onClick={props.toggleMode}>Enable Red Mode</button><br /></li>
                                <li><button type="button" className="btn btn-outline-light" id="light" onClick={props.toggleMode}>Enable Light Mode</button><br /></li>
                                <li><button type="button" className="btn btn-outline-dark" id="dark" onClick={props.toggleMode}>Enable Dark Mode</button><br /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}
