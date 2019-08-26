import { Component } from 'react';
import React from "react";

class Footer extends Component {

    render() {

        return <fragment>
            <footer>
                <div className="row text-sm-center">
                    <div className="col col-lg-4">
                        {/*<section>*/}
                            <div className="basic-education d-sm-inline-block text-sm-center pr-3 mr-5">
                                <img src="/images/basic%20education.png" />
                            </div>
                            <div className="unilever ml-3 pl-5 pt-4 pb-4 d-sm-inline-block text-sm-center text-right">
                                <img src="/images/unilever.png" />
                            </div>
                        {/*</section>*/}
                    </div>
                    <div className="col col-lg-5 col-sm-12">
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
                    <div className="col col-sm-12 col-lg-2 social-btns">
                        <a href="#" className="m-sm-2"><span className="rounded-circle"><i className="fa fa-facebook"></i> </span></a>
                        <a href="#" className="m-sm-2"><span className="rounded-circle"><i className="fa fa-instagram"></i> </span></a>
                        <a href="#" className="m-sm-2"><span className="rounded-circle"><i className="fa fa-twitter"></i> </span></a>
                    </div>
                </div>
            </footer>
            <img className='tree-style' src="/images/tree-wt-grass.png" />
        </fragment>
    }
}

export default Footer;