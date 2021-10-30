import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div>
            <footer>
                <div className="footer">
                    <div className="container">
                        <div className="row">

                            <div className="col-sm-12">
                                <div className=" border_top1"></div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <h3>menu LINKS</h3>
                                <ul className="link_menu">
                                    <Link to='/'><li><a href="#">Home</a></li>
                                    </Link>
                                    <Link to='/aboutus'><li><a href="about"> About Us</a></li></Link>
                                    <Link to='/events'> <li><a href="events">Events</a></li></Link>
                                    <Link to='/goal'> <li><a href="goal">Our Goals</a></li></Link>
                                </ul>
                            </div>
                            <div className=" col-md-3">
                                <h3>Save Nature</h3>
                                <p className="many">
                                    We plant the right trees in the right places to safeguard biodiversity, protect nature, and fight climate change.
                                </p>
                            </div>
                            <div className="col-lg-3 offset-md-lg-2 col-md-4 offset-md-1">
                                <h3>Contact </h3>
                                <ul className="container">
                                    <li><i className="fa fa-map-marker" aria-hidden="true"></i> Location</li>
                                    <li> <i className="fa fa-envelope" aria-hidden="true"></i><a href="#"> demo@gmail.com</a></li>
                                    <li><i className="fa fa-mobile" aria-hidden="true"></i> Call : +01 1234567890</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </footer>
        </div>
    );
};

export default Footer;