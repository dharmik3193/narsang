import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer id="contact">
            <div className="footer-info">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="footer-fix flex">
                                <div className="logo">
                                    <a href="index.html">
                                        {/* <h3>Solid Exports</h3> */}
                                        <img src="img/logo-white.png" alt="" />
                                    </a>
                                </div>
                                <div>
                                    <p>
                                        Lorem Ipsum has been the industry's standard dummy text ever since
                                        the 1500s, when an unknown printer took a galley of type and
                                        scrambled it to make a type specimen book.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="footer-fix fotr-ser">
                                <h3 className="footertitle">Information</h3>
                                <ul>
                                    <li>
                                        <Link to={'/about'}>About</Link>
                                    </li>
                                    <li>
                                        <Link to={'/products'}>Products</Link>
                                    </li>
                                    {/* <li>
                                        <a href="export.html">Export</a>
                                    </li> */}
                                </ul>
                                <ul>
                                    <li>
                                        <Link to={'/contact'}>Contact Us</Link>
                                    </li>
                                    <li>
                                        <Link to={'/contact'}>Inquire Now</Link>
                                    </li>
                                    {/* <li>
                                        <a href="contact.html">Contact Us</a>
                                    </li> */}
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="footer-fix">
                                <h3 className="footertitle">Address Info</h3>
                                <ul>
                                    <li>
                                        <i className="fa fa-map-marker" />
                                        <a href="https://goo.gl/maps/jSD4awwJkFjsrTjm9" target="_blank" rel="noopener noreferrer" className="a-color">
                                            <strong>address</strong>
                                            402, Middle Point, Mahadev Chowk, Mota Varachha, Surat.
                                        </a>
                                    </li>
                                    <li>
                                        <i className="fa fa-phone" />
                                        <a href="tel:+91 8758298814" className="a-color">
                                            <strong>phone</strong>
                                            +91 87582 98814
                                        </a>
                                    </li>
                                    <li>
                                        <i className="fa fa-envelope" />
                                        <a href="mailto:info@arshiktech.com" className="a-color">
                                            <strong>email</strong>info@arshiktech.org
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-sm-6 col-xs-12">
                            <div className="copyright">
                                <p>
                                    Copyright © 2023 All Rights Reserved | Developed by Arshik Infotech (Dharmik Bambharoliya)
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <div className="footer-icons">
                                <ul>
                                    <li>
                                        <a href="#" className="fb-hover">
                                            <i className="fa fa-facebook" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="twitter-hover">
                                            <i className="fa fa-twitter" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="google-hover">
                                            <i className="fa fa-google" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="pinterest-hover">
                                            <i className="fa fa-pinterest" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="insta-hover">
                                            <i className="fa fa-instagram" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer;