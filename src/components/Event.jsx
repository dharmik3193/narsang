const Event = () => {
    return (
        <section className="section section-bg">
            <div className="container">
                <div className="section-title center">
                    <h2>
                        <span>Recent</span>Events
                    </h2>
                </div>
                <div className="row">
                    <div className="owl-carousel owl-theme owl-event">
                        <div className="item">
                            <div className="news-blog">
                                <img src="img/blog-1.jpg" />
                                <div className="news-desc">
                                    <h3>Recent Event Detail</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="news-blog">
                                <img src="img/blog-2.jpg" />
                                <div className="news-desc">
                                    <h3>Recent Event Detail</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="news-blog">
                                <img src="img/blog-3.jpg" />
                                <div className="news-desc">
                                    <h3>Recent Event Detail</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Event