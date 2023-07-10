import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Whyus = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="why-us">
              <div className="section-title">
                <h2>
                  <span>Why</span>Choose Us
                </h2>
              </div>
              <p>
                We at Solid export believe that Indian culture and our extraordinary
                flavors should reach every side of the world. Solid export is one of
                the chief export company for the transportation of Indian cereals
                and pulses.
              </p>
              <div className="our-pont">
                <div className="point-why">
                  <img src="img/pnt-1.png" />
                  <div className="pont-desc">
                    <h3>Best Services</h3>
                    <p>
                      We provide our import &amp; export services throughout the
                      world with an exceptional job that speaks clearly in our work.
                    </p>
                  </div>
                </div>
                <div className="point-why">
                  <img src="img/pnt-2.png" />
                  <div className="pont-desc">
                    <h3>Reputation</h3>
                    <p>
                      We are in the market for around 5 years and have made a
                      reputation with our devotional working ethics and standards.
                    </p>
                  </div>
                </div>
                <div className="point-why">
                  <img src="img/pnt-3.png" />
                  <div className="pont-desc">
                    <h3>Safety &amp; Security</h3>
                    <p>
                      We understand the safety and security you deserve during the
                      supplement of the products, and we take all the essential
                      measures to maintain so.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 bg-testi">
            {/* <div id="testimonial-slider" className="owl-carousel">
          <div className="testimonial">
            <div className="pic">
              <img src="img/profile-1.jpg" alt="" />
            </div>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              tempor finibus risus. Vivamus quis aliquet nibh. Nunc vitae felis
              nunc. Nam scelerisque maximus tempor. Proin sed euismod tellus.
              Nunc sodales, quam et porttitor accumsan, lectus dolor laoreet
              dolor, a scelerisque.
            </p>
            <h3 className="testimonial-title">Williamson - Web Developer</h3>
          </div>
          <div className="testimonial">
            <div className="pic">
              <img src="img/profile-2.jpg" alt="" />
            </div>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              tempor finibus risus. Vivamus quis aliquet nibh. Nunc vitae felis
              nunc. Nam scelerisque maximus tempor. Proin sed euismod tellus.
              Nunc sodales, quam et porttitor accumsan, lectus dolor laoreet
              dolor, a scelerisque.
            </p>
            <h3 className="testimonial-title">kristiana - Web Designer</h3>
          </div>
          <div className="testimonial">
            <div className="pic">
              <img src="img/profile-1.jpg" alt="" />
            </div>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              tempor finibus risus. Vivamus quis aliquet nibh. Nunc vitae felis
              nunc. Nam scelerisque maximus tempor. Proin sed euismod tellus.
              Nunc sodales, quam et porttitor accumsan, lectus dolor laoreet
              dolor, a scelerisque.
            </p>
            <h3 className="testimonial-title">Steve Thomas - Web Developer</h3>
          </div>
        </div> */}
            <OwlCarousel items={1}
              className="owl-theme"
              loop={true}
              nav={false}
              dots={false}
              autoplay={true}
              margin={0}
              animateIn={'fadeIn'}
              animateOut={'fadeOut'}
              id='testimonial-slider'
            >
              <div className="testimonial">
                <div className="pic">
                  <img src="img/profile-1.jpg" alt="" />
                </div>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                  tempor finibus risus. Vivamus quis aliquet nibh. Nunc vitae felis
                  nunc. Nam scelerisque maximus tempor. Proin sed euismod tellus.
                  Nunc sodales, quam et porttitor accumsan, lectus dolor laoreet
                  dolor, a scelerisque.
                </p>
                <h3 className="testimonial-title">Williamson - Web Developer</h3>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Whyus