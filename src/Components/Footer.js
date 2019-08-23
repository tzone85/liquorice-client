import { Component } from 'react';
import React from "react";

class Footer extends Component {

    render() {

        return <fragment>
            <footer>
                <div className="row">
                    <div className="col-lg-4">
                        <section>
                            <div className="basic-education pr-3 mr-5">
                                <img src="/images/basic%20education.png" />
                            </div>
                            <div className="unilever ml-3 pl-5 text-right">
                                <img src="/images/unilever.png" />
                            </div>
                        </section>
                    </div>
                    <div className="col-lg-5">
                        <nav>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Activities</a></li>
                                <li><a href="#">News</a></li>
                                <li><a href="#">Sign Up</a></li>
                                <li><a href="#">Contact Us</a></li>
                            </ul>
                        </nav>
                        <p className="copy">Copyright 2018 | All rights reserved | Unilever Bright Future | Terms &
                            Conditions | Privacy policy</p>
                    </div>
                    <div className="col-2 social-btns">
                        <a href="#"><span className="rounded-circle"><i className="fa fa-facebook"></i> </span></a>
                        <a href="#"><span className="rounded-circle"><i className="fa fa-instagram"></i> </span></a>
                        <a href="#"><span className="rounded-circle"><i className="fa fa-twitter"></i> </span></a>
                    </div>
                </div>
            </footer>
        </fragment>
    }
}

export default Footer;