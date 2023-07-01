import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="sticky">
            <div className="container">
                <div className=""></div>
                <div className="row">
                    <div className="col-md-4 col-xs-3">
                        <div className="logo">
                            <Link to={'/'}>
                                <img src="img/logo.png" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-8 col-xs-9">
                        <div className="header-menu">
                            <nav className="navbar navbar-default">
                                <div className="navbar-header">
                                    <button
                                        className="navbar-toggle"
                                        type="button"
                                        data-toggle="collapse"
                                        data-target=".js-navbar-collapse"
                                    >
                                        <span className="sr-only">Toggle navigation</span>
                                        <span className="icon-bar" />
                                        <span className="icon-bar" />
                                        <span className="icon-bar" />
                                    </button>
                                </div>
                                <div
                                    className="collapse navbar-collapse js-navbar-collapse"
                                    id="navbar-example"
                                >
                                    <div className="main-menu">
                                        <ul className="nav navbar-nav">
                                            <li>
                                                <Link to={'/'}>Home</Link>
                                            </li>
                                            <li>
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
                                            <li>
                                                <Link to={'/products'}>Products</Link>
                                            </li>
                                            <li>
                                                <Link to={'/contact'}>Contact</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
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

    )
}

export default Header;