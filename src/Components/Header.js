import { Component } from 'react';
import React from "react";

class Header extends Component {

    render() {

        return <fragment>
            <header className="">
                <div className="row">
                    <div className="col">
                        <button className="btn ml-sm-1"><i className="fa fa-chevron-left mr-3"></i> Back to website
                        </button>
                    </div>
                    <div className="col">
                        <nav>
                            <ul className="mb-0">
                                <li className="p-lg-5 p-2"><a href="#">Dashboard</a></li>
                                <li><a href="#" className="">Leaderboard</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col">
                        <div className="dropdown text-right">
                            <button className="btn dropdown-toggle" type="button" id="accountDropDownMennu"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false">
                                <i className="fa fa-user-circle-o"></i> <span className="d-none d-lg-inline-block d-xl-inline-block">Account</span>
                            </button>
                            <div className="dropdown-menu" aria-labelledby="accountDropDownMennu">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </fragment>
    }
}

export default Header;