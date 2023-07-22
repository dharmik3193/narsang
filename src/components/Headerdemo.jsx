import { useState } from "react";
import { Link } from "react-router-dom";

const Headerdemo = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };
    return (
        <>
            <header className="sticky-header">
                <nav className="navbar">
                    <div className="container">
                        <div className="logo">
                            <Link to={'/'}>
                                <img src="img/logo.png" />
                            </Link>
                        </div>
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
                                    <Link to={'/about'}>About Us</Link>
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
                </nav>
            </header>
        </>
    )
}

export default Headerdemo;