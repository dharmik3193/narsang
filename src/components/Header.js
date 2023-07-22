import { useState } from "react";
import { Link } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { FaBars } from "react-icons/fa6";
import Offcanvas from 'react-bootstrap/Offcanvas';

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };
    return (
        <>
            <header className="sticky">
                <div className="container">
                    <div className="row aligncenter">
                        <div className="col-md-4 col-xs-8 col-8">
                            <div className="logo">
                                <Link to={'/'}>
                                    <img src="img/logo.png" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-8 col-xs-4 col-4">
                            <div className="header-height">
                                <div className={`menu-icon ${showMenu ? 'open' : ''}`} onClick={toggleMenu}>
                                    <div className="menu-line"></div>
                                    <div className="menu-line"></div>
                                    <div className="menu-line"></div>
                                </div>
                                <ul className={`nav-links ${showMenu ? 'show' : ''}`}>
                                    <ul className="nav navbar-nav">
                                        <li onClick={toggleMenu}>
                                            <Link to={'/'}>Home</Link>
                                        </li>
                                        <li onClick={toggleMenu}>
                                            <Link to={'/about'}>About&nbsp;Us</Link>
                                        </li>
                                        {/* <li>
                                                <a href="import.html">Import</a>
                                            </li>
                                            <li>
                                                <a href="export.html">Export</a>
                                            </li>
                                            <li>
                                                <a href="event.html">Event</a>
                                            </li> */}
                                        <li onClick={toggleMenu}>
                                            <Link to={'/products'}>Products</Link>
                                        </li>
                                        <li onClick={toggleMenu}>
                                            <Link to={'/contact'}>Contact</Link>
                                        </li>
                                    </ul>
                                </ul>
                            </div>
                        </div>

                        {/* <div className="col-md-2 no-padding bg-red">
                        <div className="joindiv">
                            <ul>
                                <li>
                                    <a href="">
                                        <i className="fa fa-whatsapp" />
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <i className="fa fa-instagram" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div> */}
                    </div>
                </div>
            </header>

        </>

    )
}

export default Header;