const Counter = () => {
    return (
        <>
            <section className="section section-counter">
                <div className="container">
                    <div className="row">
                        <div className="row">
                            <div className="col-md-3 col-xs-6">
                                <div className="counter">
                                    <i className="fa fa-briefcase" aria-hidden="true" />
                                    <div className="counter-content">
                                        <span className="counter-value">30</span>
                                        <h3>Years of Experience</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-xs-6 border-lft-rt">
                                <div className="counter">
                                    <i className="fa fa-flag" aria-hidden="true" />
                                    <div className="counter-content">
                                        <span className="counter-value">50</span>
                                        <h3>Countries</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-xs-6 border-rt">
                                <div className="counter">
                                    <i className="fa fa-user" aria-hidden="true" />
                                    <div className="counter-content">
                                        <span className="counter-value">25</span>
                                        <h3>Commodities</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-xs-6">
                                <div className="counter">
                                    <i className="fa fa-trophy" aria-hidden="true" />
                                    <div className="counter-content">
                                        <span className="counter-value">10</span>
                                        <h3>Awards</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section section-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="faq-div">
                                <div className="section-title">
                                    <h2>
                                        <span>F . A .</span>Question
                                    </h2>
                                </div>
                                <div
                                    className="panel-group"
                                    id="accordion"
                                    role="tablist"
                                    aria-multiselectable="true"
                                >
                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="headingOne">
                                            <h4 className="panel-title">
                                                <a
                                                    role="button"
                                                    data-toggle="collapse"
                                                    data-parent="#accordion"
                                                    href="#collapseOne"
                                                    aria-expanded="true"
                                                    aria-controls="collapseOne"
                                                >
                                                    Are you a processor or trader?
                                                </a>
                                            </h4>
                                        </div>
                                        <div
                                            id="collapseOne"
                                            className="panel-collapse collapse in"
                                            role="tabpanel"
                                            aria-labelledby="headingOne"
                                        >
                                            <div className="panel-body">
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                    Praesent nisl lorem, dictum id pellentesque at, vestibulum
                                                    ut arcu. Curabitur erat libero, egestas eu tincidunt ac,
                                                    rutrum ac justo. Vivamus condimentum laoreet lectus,
                                                    blandit posuere tortor aliquam vitae. Curabitur molestie
                                                    eros.{" "}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="headingTwo">
                                            <h4 className="panel-title">
                                                <a
                                                    className="collapsed"
                                                    role="button"
                                                    data-toggle="collapse"
                                                    data-parent="#accordion"
                                                    href="#collapseTwo"
                                                    aria-expanded="false"
                                                    aria-controls="collapseTwo"
                                                >
                                                    In which countries do you supply rice?
                                                </a>
                                            </h4>
                                        </div>
                                        <div
                                            id="collapseTwo"
                                            className="panel-collapse collapse"
                                            role="tabpanel"
                                            aria-labelledby="headingTwo"
                                        >
                                            <div className="panel-body">
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                    Praesent nisl lorem, dictum id pellentesque at, vestibulum
                                                    ut arcu. Curabitur erat libero, egestas eu tincidunt ac,
                                                    rutrum ac justo. Vivamus condimentum laoreet lectus,
                                                    blandit posuere tortor aliquam vitae. Curabitur molestie
                                                    eros.{" "}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="headingThree">
                                            <h4 className="panel-title">
                                                <a
                                                    className="collapsed"
                                                    role="button"
                                                    data-toggle="collapse"
                                                    data-parent="#accordion"
                                                    href="#collapseThree"
                                                    aria-expanded="false"
                                                    aria-controls="collapseThree"
                                                >
                                                    Where do you purchase the rice from?
                                                </a>
                                            </h4>
                                        </div>
                                        <div
                                            id="collapseThree"
                                            className="panel-collapse collapse"
                                            role="tabpanel"
                                            aria-labelledby="headingThree"
                                        >
                                            <div className="panel-body">
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                    Praesent nisl lorem, dictum id pellentesque at, vestibulum
                                                    ut arcu. Curabitur erat libero, egestas eu tincidunt ac,
                                                    rutrum ac justo. Vivamus condimentum laoreet lectus,
                                                    blandit posuere tortor aliquam vitae. Curabitur molestie
                                                    eros.{" "}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="section-title">
                                <h2>
                                    <span>Our </span>Brand
                                </h2>
                            </div>
                            <div className="our-brand">
                                <div className="col-md-9 no-padding">
                                    <img src="img/product.png" />
                                </div>
                                <div className="col-md-3 beand-bg no-padding">
                                    <div className="brand-text">
                                        <h3>
                                            "We have a well-established brand by which we sell our
                                            imported commodities in the marketplace in India. "
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default Counter