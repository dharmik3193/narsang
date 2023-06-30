import { useEffect } from "react";

const Home = () => {

    var loadScript = function (src) {
        var tag = document.createElement('script');
        tag.async = false;
        tag.src = src;
        document.getElementsByTagName('body')[0].appendChild(tag);
    }

    useEffect(() => {
        loadScript('assets/js/modernizr.custom.js')
        loadScript('assets/js/device.min.js')
        loadScript('assets/js/jquery.min.js')
        loadScript('assets/bootstrap/js/bootstrap.min.js')
        loadScript('assets/js/corpress.min.js')
        loadScript('assets/js/modernizr.custom.js')
        loadScript('assets/js/jquery.pagescroller.lite.js')
        loadScript('assets/plugins/revslider/js/jquery.themepunch.revolution.min.js')
        loadScript('assets/plugins/revslider/js/jquery.themepunch.plugins.min.js')
        loadScript('assets/plugins/magnificpopup/jquery.magnific-popup.min.js')
        loadScript('assets/form/js/contact-form.js')
        loadScript('assets/js/main.js')
    }, [])

    return (
        <>
            <>
                <div id="top" className="scroll" />
                <header className="hidden-xs">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="text-wrapper">
                                    An ISO 9001:2015 Certified Company <strong>|</strong> Govt.
                                    Recognized Export House
                                    <strong>|</strong> EU Export Entitled Company
                                </div>
                            </div>
                            {/* <div class="col-md-6 text-right visible-md visible-lg">
                                <ul class="list-inline list-socials">
                                    <li><div class="text-wrapper"><a href="https://www.facebook.com/createITpl" target="_blank" data-toggle="tooltip" data-placement="bottom" title="Facebook"><i class="fa fa-facebook fa-fw"></i></a></div></li>
                                    <li><div class="text-wrapper"><a href="https://twitter.com/createitpl" target="_blank" data-toggle="tooltip" data-placement="bottom" title="Twitter"><i class="fa fa-twitter fa-fw"></i></a></div></li>
                                    <li><div class="text-wrapper"><a href="#" target="_blank" data-toggle="tooltip" data-placement="bottom" title="Google +"><i class="fa fa-google-plus fa-fw"></i></a></div></li>
                                    <li><div class="text-wrapper"><a href="#" target="_blank" data-toggle="tooltip" data-placement="bottom" title="LinkedIn"><i class="fa fa-linkedin fa-fw"></i></a></div></li>
                                    <li><div class="text-wrapper"><a href="#" target="_blank" data-toggle="tooltip" data-placement="bottom" title="Pinterest"><i class="fa fa-pinterest fa-fw"></i></a></div></li>
                                    <li><div class="text-wrapper"><a href="#" target="_blank" data-toggle="tooltip" data-placement="bottom" title="Dribble"><i class="fa fa-dribbble fa-fw"></i></a></div></li>
                                    <li><div class="text-wrapper"><a href="#" target="_blank" data-toggle="tooltip" data-placement="bottom" title="Tumblr"><i class="fa fa-tumblr fa-fw"></i></a></div></li>
                                    <li><div class="text-wrapper"><a href="#" target="_blank" data-toggle="tooltip" data-placement="bottom" title="Instagram"><i class="fa fa-instagram fa-fw"></i></a></div></li>
                                    <li><div class="text-wrapper"><a href="#" target="_blank" data-toggle="tooltip" data-placement="bottom" title="Flickr"><i class="fa fa-flickr fa-fw"></i></a></div></li>
                                </ul>
                            </div> */}
                        </div>
                    </div>
                </header>
                <div className="container" />
                <nav className="navbar yamm" role="navigation">
                    <div className="container">
                        {/* Brand and toggle get grouped for better mobile display */}
                        <div className="navbar-header hidden-xs">
                            <a className="navbar-brand" href="index-2.html">
                                <img src="images/logo.jpg" alt="HN International" />
                            </a>
                        </div>
                        {/* Collect the nav links, forms, and other content for toggling */}
                        <div
                            className="collapse navbar-collapse no-transition"
                            id="bs-example-navbar-collapse-1"
                        >
                            <ul className="nav navbar-nav navbar-right">
                                <li className="onepage active">
                                    <a href="#top" className="dropdown-toggle">
                                        Home
                                    </a>
                                </li>
                                <li className="onepage">
                                    <a href="#aboutus">About Us</a>
                                </li>
                                <li className="onepage">
                                    <a href="#products">Products</a>
                                </li>
                                <li className="onepage">
                                    <a href="#resources">Resources</a>
                                </li>
                                <li className="onepage">
                                    <a href="#network">Network</a>
                                </li>
                                <li className="onepage">
                                    <a href="#contact">Contact</a>
                                </li>
                            </ul>
                        </div>
                        {/* /.navbar-collapse */}
                    </div>
                    {/* /.container-fluid */}
                </nav>
                <div id="wrapper">
                    {/* VISIBLE COPY OF THE HEADER ONLY IN MOBILE NEEDED FOR THE SIDE MENU EFFECT */}
                    <div className="container">
                        {/* Brand and toggle get grouped for better mobile display */}
                        <div className="navbar-header visible-xs">
                            <a className="navbar-brand" href="index-2.html">
                                <img src="images/logo.jpg" alt="HN International" />
                            </a>
                            {/* <button type="button" class="navbar-toggle" id="sidebar-toggle">
      <span class="sr-only">Toggle navigation</span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
  </button> */}
                        </div>
                    </div>
                    {/* END */}
                    {/* START REVOLUTION SLIDER 4.5.9 fullwidth mode */}
                    <div
                        id="rev2_wrapper"
                        className="rev_slider_wrapper fullwidthbanner-container"
                    >
                        <div
                            id="rev2"
                            className="rev_slider fullwidthabanner"
                            style={{ backgroundColor: "#eaeaea" }}
                        >
                            <ul style={{ backgroundColor: "#5a3e12" }}>
                                {/* SLIDE  */}
                                <li
                                    data-transition="zoomout"
                                    data-slotamount={5}
                                    data-masterspeed={700}
                                >
                                    {/* MAIN IMAGE */}
                                    <img
                                        src="images/slide1.jpg"
                                        alt="Sesame Seeds Exporter"
                                        data-bgposition="center center"
                                        data-bgfit="cover"
                                        data-bgrepeat="no-repeat"
                                    />
                                    {/* LAYERS */}
                                    {/* LAYER NR. 1 */}
                                    <div
                                        className="tp-caption tp-fade fadeout"
                                        data-x={0}
                                        data-y={0}
                                        data-speed={1000}
                                        data-start={1100}
                                        data-easing="Power4.easeOut"
                                        data-elementdelay="0.01"
                                        data-endelementdelay="0.1"
                                        data-endspeed={1500}
                                        data-endeasing="Power4.easeIn"
                                        data-autoplay="true"
                                        data-autoplayonlyfirsttime="false"
                                        data-nextslideatend="true"
                                        data-volume="mute"
                                        data-forcecover={1}
                                        data-aspectratio="16:9"
                                        data-forcerewind="on"
                                    ></div>
                                    {/* LAYER NR. 2 */}
                                    <div
                                        className="tp-caption customin customout h1 uppercase white big"
                                        data-x="center"
                                        data-y={205}
                                        data-customin="x:0;y:0;z:0;rotationX:90;rotationY:0;rotationZ:0;scaleX:1;scaleY:1;skewX:0;skewY:0;opacity:0;transformPerspective:200;transformOrigin:50% 0%;"
                                        data-customout="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0.75;scaleY:0.75;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
                                        data-speed={1000}
                                        data-start={800}
                                        data-easing="Back.easeInOut"
                                        data-endspeed={300}
                                        style={{ zIndex: 7 }}
                                    >
                                        <div style={{ textShadow: "#000000 0 0 2px" }}>
                                            H.N. International
                                        </div>
                                    </div>
                                    {/* LAYER NR. 3 */}
                                    <div
                                        className="tp-caption sfb h2 uppercase white weight300"
                                        data-x="center"
                                        data-y="center"
                                        data-speed={500}
                                        data-start={1500}
                                        data-easing="Power4.easeOut"
                                        data-endspeed={300}
                                        data-endeasing="Power1.easeIn"
                                        data-captionhidden="off"
                                        style={{ zIndex: 7 }}
                                    >
                                        <div style={{ textShadow: "#000000 0 0 2px" }}>
                                            Agri Commodity Exporter &amp; Supplier
                                        </div>
                                    </div>
                                    {/* LAYER NR. 4 */}
                                    {/* <div class="tp-caption customin tp-resizeme rs-parallaxlevel-0 start hasclicklistener"
   data-x="center"
   data-y="490"

   data-customin="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0;scaleY:0;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
   data-speed="500"
   data-start="1900"
   data-easing="Power3.easeInOut"
   data-splitin="none"
   data-splitout="none"
   data-elementdelay="0.1"
   data-endelementdelay="0.1"
   data-linktoslide="next">
  <a href="#" class="btn btn-border btn-lg">View Our Work</a>
  <a href="#" class="btn btn-primary btn-lg">Learn About Us</a>
    </div> */}
                                </li>
                                <li
                                    data-transition="zoomout"
                                    data-slotamount={5}
                                    data-masterspeed={700}
                                >
                                    {/* MAIN IMAGE */}
                                    <img
                                        src="images/slide1.jpg"
                                        alt="Sesame Seeds Exporter"
                                        data-bgposition="center center"
                                        data-bgfit="cover"
                                        data-bgrepeat="no-repeat"
                                    />
                                    {/* LAYERS */}
                                    {/* LAYER NR. 1 */}
                                    <div
                                        className="tp-caption tp-fade fadeout"
                                        data-x={0}
                                        data-y={0}
                                        data-speed={1000}
                                        data-start={1100}
                                        data-easing="Power4.easeOut"
                                        data-elementdelay="0.01"
                                        data-endelementdelay="0.1"
                                        data-endspeed={1500}
                                        data-endeasing="Power4.easeIn"
                                        data-autoplay="true"
                                        data-autoplayonlyfirsttime="false"
                                        data-nextslideatend="true"
                                        data-volume="mute"
                                        data-forcecover={1}
                                        data-aspectratio="16:9"
                                        data-forcerewind="on"
                                    ></div>
                                    {/* LAYER NR. 2 */}
                                    <div
                                        className="tp-caption customin customout h1 uppercase white big"
                                        data-x="center"
                                        data-y={205}
                                        data-customin="x:0;y:0;z:0;rotationX:90;rotationY:0;rotationZ:0;scaleX:1;scaleY:1;skewX:0;skewY:0;opacity:0;transformPerspective:200;transformOrigin:50% 0%;"
                                        data-customout="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0.75;scaleY:0.75;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
                                        data-speed={1000}
                                        data-start={800}
                                        data-easing="Back.easeInOut"
                                        data-endspeed={300}
                                        style={{ zIndex: 7 }}
                                    >
                                        <img
                                            src="images/sesame-seeds-homeslider.png"
                                            alt="Sesame Seeds | HN International"
                                        />
                                    </div>
                                    {/* LAYER NR. 3 */}
                                    {/* <div class="tp-caption sfb h2 uppercase white weight300"
   data-x="center"
   data-y="center"

   data-speed="500"
   data-start="1500"
   data-easing="Power4.easeOut"
   data-endspeed="300"
   data-endeasing="Power1.easeIn"
   data-captionhidden="off"
   style="z-index: 7">
  <div style="text-shadow: #000000 0 0 2px;">Agri Commodity Exporter &amp; Supplier</div>
    </div> */}
                                    {/* LAYER NR. 4 */}
                                    {/* <div class="tp-caption customin tp-resizeme rs-parallaxlevel-0 start hasclicklistener"
   data-x="center"
   data-y="490"

   data-customin="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0;scaleY:0;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
   data-speed="500"
   data-start="1900"
   data-easing="Power3.easeInOut"
   data-splitin="none"
   data-splitout="none"
   data-elementdelay="0.1"
   data-endelementdelay="0.1"
   data-linktoslide="next">
  <a href="#" class="btn btn-border btn-lg">View Our Work</a>
  <a href="#" class="btn btn-primary btn-lg">Learn About Us</a>
    </div> */}
                                </li>
                                <li
                                    data-transition="zoomout"
                                    data-slotamount={5}
                                    data-masterspeed={700}
                                >
                                    {/* MAIN IMAGE */}
                                    <img
                                        src="images/slide1.jpg"
                                        alt="Peanuts Exporter"
                                        data-bgposition="center center"
                                        data-bgfit="cover"
                                        data-bgrepeat="no-repeat"
                                    />
                                    {/* LAYERS */}
                                    {/* LAYER NR. 1 */}
                                    <div
                                        className="tp-caption tp-fade fadeout"
                                        data-x={0}
                                        data-y={0}
                                        data-speed={1000}
                                        data-start={1100}
                                        data-easing="Power4.easeOut"
                                        data-elementdelay="0.01"
                                        data-endelementdelay="0.1"
                                        data-endspeed={1500}
                                        data-endeasing="Power4.easeIn"
                                        data-autoplay="true"
                                        data-autoplayonlyfirsttime="false"
                                        data-nextslideatend="true"
                                        data-volume="mute"
                                        data-forcecover={1}
                                        data-aspectratio="16:9"
                                        data-forcerewind="on"
                                    ></div>
                                    {/* LAYER NR. 2 */}
                                    <div
                                        className="tp-caption customin customout h1 uppercase white big"
                                        data-x="center"
                                        data-y={205}
                                        data-customin="x:0;y:0;z:0;rotationX:90;rotationY:0;rotationZ:0;scaleX:1;scaleY:1;skewX:0;skewY:0;opacity:0;transformPerspective:200;transformOrigin:50% 0%;"
                                        data-customout="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0.75;scaleY:0.75;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
                                        data-speed={1000}
                                        data-start={800}
                                        data-easing="Back.easeInOut"
                                        data-endspeed={300}
                                        style={{ zIndex: 7 }}
                                    >
                                        <img
                                            src="images/peanuts-homeslider.png"
                                            alt="Peanuts | HN International"
                                        />
                                    </div>
                                </li>
                                <li
                                    data-transition="zoomout"
                                    data-slotamount={5}
                                    data-masterspeed={700}
                                >
                                    {/* MAIN IMAGE */}
                                    <img
                                        src="images/slide1.jpg"
                                        alt="Raisin Exporter"
                                        data-bgposition="center center"
                                        data-bgfit="cover"
                                        data-bgrepeat="no-repeat"
                                    />
                                    {/* LAYERS */}
                                    {/* LAYER NR. 1 */}
                                    <div
                                        className="tp-caption tp-fade fadeout"
                                        data-x={0}
                                        data-y={0}
                                        data-speed={1000}
                                        data-start={1100}
                                        data-easing="Power4.easeOut"
                                        data-elementdelay="0.01"
                                        data-endelementdelay="0.1"
                                        data-endspeed={1500}
                                        data-endeasing="Power4.easeIn"
                                        data-autoplay="true"
                                        data-autoplayonlyfirsttime="false"
                                        data-nextslideatend="true"
                                        data-volume="mute"
                                        data-forcecover={1}
                                        data-aspectratio="16:9"
                                        data-forcerewind="on"
                                    ></div>
                                    {/* LAYER NR. 2 */}
                                    <div
                                        className="tp-caption customin customout h1 uppercase white big"
                                        data-x="center"
                                        data-y={205}
                                        data-customin="x:0;y:0;z:0;rotationX:90;rotationY:0;rotationZ:0;scaleX:1;scaleY:1;skewX:0;skewY:0;opacity:0;transformPerspective:200;transformOrigin:50% 0%;"
                                        data-customout="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0.75;scaleY:0.75;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
                                        data-speed={1000}
                                        data-start={800}
                                        data-easing="Back.easeInOut"
                                        data-endspeed={300}
                                        style={{ zIndex: 7 }}
                                    >
                                        <img
                                            src="images/raisin-homeslider.png"
                                            alt="Raisin | HN International"
                                        />
                                    </div>
                                </li>
                                <li
                                    data-transition="zoomout"
                                    data-slotamount={5}
                                    data-masterspeed={700}
                                >
                                    {/* MAIN IMAGE */}
                                    <img
                                        src="images/slide1.jpg"
                                        alt="Sugar Exporter"
                                        data-bgposition="center center"
                                        data-bgfit="cover"
                                        data-bgrepeat="no-repeat"
                                    />
                                    {/* LAYERS */}
                                    {/* LAYER NR. 1 */}
                                    <div
                                        className="tp-caption tp-fade fadeout"
                                        data-x={0}
                                        data-y={0}
                                        data-speed={1000}
                                        data-start={1100}
                                        data-easing="Power4.easeOut"
                                        data-elementdelay="0.01"
                                        data-endelementdelay="0.1"
                                        data-endspeed={1500}
                                        data-endeasing="Power4.easeIn"
                                        data-autoplay="true"
                                        data-autoplayonlyfirsttime="false"
                                        data-nextslideatend="true"
                                        data-volume="mute"
                                        data-forcecover={1}
                                        data-aspectratio="16:9"
                                        data-forcerewind="on"
                                    ></div>
                                    {/* LAYER NR. 2 */}
                                    <div
                                        className="tp-caption customin customout h1 uppercase white big"
                                        data-x="center"
                                        data-y={205}
                                        data-customin="x:0;y:0;z:0;rotationX:90;rotationY:0;rotationZ:0;scaleX:1;scaleY:1;skewX:0;skewY:0;opacity:0;transformPerspective:200;transformOrigin:50% 0%;"
                                        data-customout="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0.75;scaleY:0.75;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
                                        data-speed={1000}
                                        data-start={800}
                                        data-easing="Back.easeInOut"
                                        data-endspeed={300}
                                        style={{ zIndex: 7 }}
                                    >
                                        <img
                                            src="images/sugar-homeslider.png"
                                            alt="Sugar | HN International"
                                        />
                                    </div>
                                </li>
                                <li
                                    data-transition="zoomout"
                                    data-slotamount={5}
                                    data-masterspeed={700}
                                >
                                    {/* MAIN IMAGE */}
                                    <img
                                        src="images/slide1.jpg"
                                        alt="Rapeseed Meal Exporter"
                                        data-bgposition="center center"
                                        data-bgfit="cover"
                                        data-bgrepeat="no-repeat"
                                    />
                                    {/* LAYERS */}
                                    {/* LAYER NR. 1 */}
                                    <div
                                        className="tp-caption tp-fade fadeout"
                                        data-x={0}
                                        data-y={0}
                                        data-speed={1000}
                                        data-start={1100}
                                        data-easing="Power4.easeOut"
                                        data-elementdelay="0.01"
                                        data-endelementdelay="0.1"
                                        data-endspeed={1500}
                                        data-endeasing="Power4.easeIn"
                                        data-autoplay="true"
                                        data-autoplayonlyfirsttime="false"
                                        data-nextslideatend="true"
                                        data-volume="mute"
                                        data-forcecover={1}
                                        data-aspectratio="16:9"
                                        data-forcerewind="on"
                                    ></div>
                                    {/* LAYER NR. 2 */}
                                    <div
                                        className="tp-caption customin customout h1 uppercase white big"
                                        data-x="center"
                                        data-y={205}
                                        data-customin="x:0;y:0;z:0;rotationX:90;rotationY:0;rotationZ:0;scaleX:1;scaleY:1;skewX:0;skewY:0;opacity:0;transformPerspective:200;transformOrigin:50% 0%;"
                                        data-customout="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0.75;scaleY:0.75;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
                                        data-speed={1000}
                                        data-start={800}
                                        data-easing="Back.easeInOut"
                                        data-endspeed={300}
                                        style={{ zIndex: 7 }}
                                    >
                                        <img
                                            src="images/rapeseed-meal-homeslider.png"
                                            alt="Rapeseed Meal | HN International"
                                        />
                                    </div>
                                </li>
                            </ul>
                            <div className="tp-bannertimer" />
                        </div>
                    </div>
                    {/* END REVOLUTION SLIDER */}
                    <div className="container" />
                    <section id="aboutus" className="container scroll">
                        <div className="section">
                            <div className="row">
                                <div className="col-sm-12">
                                    <h2 className="uppercase section-title hr-left">COMPANY PROFILE</h2>
                                    <p>
                                        H. N. INTERNATIONAL started with the aim to understand and
                                        accomplish the need of the international clients in ever-changing
                                        global agriculture market. The founding principle of our
                                        organisation is providing superior quality and customer
                                        satisfaction. We are strongly committed to give quality products
                                        to our clients before committed time frame.
                                    </p>
                                    <p>
                                        We believe in innovative process which adheres to international
                                        standard. Our strong credit profile, vast business network and
                                        expert workforce helps us serve our clients with superior quality
                                        in competitive market.
                                    </p>
                                    <p>
                                        Also accreditation by ISO and other international organisation
                                        adds feather to our success story and helps us maintain Superior
                                        quality.
                                    </p>
                                    <h4 className="uppercase section-title no-margin">
                                        Our Attributes
                                    </h4>
                                    <p>
                                        For us Client’s Satisfaction is a strategy to maintain the best
                                        and the strongest relationship with them. We know that in
                                        continuous changing market scenario, we need to continuously
                                        improve our products and services to meet the changing needs and
                                        expectations of our clients. That is the reason why we give utmost
                                        importance to our client’s feedback.
                                    </p>
                                    <p>
                                        We keep our clients updated on market developments, economic
                                        developments and external factors affecting market prices on an
                                        on-going basis, which helps them in planning their requirements
                                        and improving their bottom lines.
                                    </p>
                                    <p>
                                        For us at H. N. International it is pleasure that our clients are
                                        confident that they can place order without hesitation even in
                                        volatile markets and know that we will never compromise in
                                        whatsoever situation.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="container" />
                    {/* <div class="media-section darkbg" data-stellar-background-ratio="0.5" data-height="500" data-type="parallax" data-image="assets/images/content/parallax2.jpg" data-image-mobile="assets/images/content/parallax2-mobile.jpg">
    <div class="inner">
  <div class="container">
      <div class="row">
          <div class="col-md-3 col-sm-6">
              <div class="icon-counter animated" data-fx="pulse">
                  <div class="square-icon-box square-icon-small">
                      <i class="fa fa-desktop"></i>
                  </div>
              <span class="counter hr-mid" data-to="776523">
                  0
              </span>
              <span class="description">
                  Pixels Crafted So Far
              </span>
              </div>
          </div>
          <div class="clearfix visible-xs"></div>
          <div class="col-md-3 col-sm-6">
              <div class="icon-counter animated" data-fx="pulse">
                  <div class="square-icon-box square-icon-small">
                      <i class="fa fa-clock-o"></i>
                  </div>
              <span class="counter hr-mid" data-to="4392">
                  0
              </span>
              <span class="description">
                  Hours of Design Yearly
              </span>
              </div>
          </div>
          <div class="clearfix visible-sm visible-xs"></div>
          <div class="col-md-3 col-sm-6">
              <div class="icon-counter animated" data-fx="pulse">
                  <div class="square-icon-box square-icon-small">
                      <i class="fa fa-coffee"></i>
                  </div>
              <span class="counter hr-mid" data-to="1098">
                  0
              </span>
              <span class="description">
                  Coffee Cups Done in a Year
              </span>
              </div>
          </div>
          <div class="clearfix visible-xs"></div>
          <div class="col-md-3 col-sm-6">
              <div class="icon-counter animated" data-fx="pulse">
                  <div class="square-icon-box square-icon-small">
                      <i class="fa fa-lightbulb-o"></i>
                  </div>
              <span class="counter hr-mid" data-to="12300">
                  0
              </span>
              <span class="description">
                  Ideas per Second
              </span>
              </div>
          </div>
      </div>
  </div>
    </div>
</div> */}
                    <div className="container" />
                    <section id="products" className="section bg2 scroll">
                        <div className="container">
                            <div className="container text-center">
                                <h2 className="uppercase section-title hr-mid">Products We Offer</h2>
                                {/* <h2 class="uppercase weight300">We offer best quality Hulled Sesame Seeds, Natural Sesame Seeds, Black Sesame Seeds, Raisins, Sugar, Cumin Seeds, Coriander Seeds, Fenugreek Seeds, Rapeseed Meal</h2> */}
                                <div className="clearfix" />
                            </div>
                            <div className="section-top-">
                                <div className="row">
                                    <div className="col-sm-6 col-md-4">
                                        <div className="person-box">
                                            <div className="image-wrapper">
                                                <img
                                                    src="images/hulled-sesame-seemds.jpg"
                                                    alt="Hulled Sesame Seeds - HN International"
                                                />
                                            </div>
                                            <h4 className="uppercase hr-mid">
                                                <a href="#contact">Hulled Sesame Seeds</a>
                                            </h4>
                                            <h4 className="uppercase weight300">
                                                <a href="#contact">Make Inquiry</a>
                                            </h4>
                                            {/* <p>Content here</p>
	                    <ul class="list-inline list-socials">
	                        <li><div class="text-wrapper"><a href="javascript:void(0);" target="_blank" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Facebook"><i class="fa fa-facebook fa-fw"></i></a></div></li>
	                        <li><div class="text-wrapper"><a href="javascript:void(0);" target="_blank" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Twitter"><i class="fa fa-twitter fa-fw"></i></a></div></li>
	                        <li><div class="text-wrapper"><a href="javascript:void(0);" target="_blank" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="LinkedIn"><i class="fa fa-linkedin fa-fw"></i></a></div></li>
	                    </ul> */}
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-4">
                                        <div className="person-box">
                                            <div className="image-wrapper">
                                                <img
                                                    src="images/natural-sesame-seeds.jpg"
                                                    alt="Natural Sesame Seeds - HN International"
                                                />
                                            </div>
                                            <h4 className="uppercase hr-mid">
                                                <a href="#contact">Natural Sesame Seeds</a>
                                            </h4>
                                            <h4 className="uppercase weight300">
                                                <a href="#contact">Make Inquiry</a>
                                            </h4>
                                        </div>
                                    </div>
                                    {/* <div class="clearfix visible-sm"></div> */}
                                    <div className="col-sm-6 col-md-4">
                                        <div className="person-box">
                                            <div className="image-wrapper">
                                                <img
                                                    src="images/black-sesame-seeds.jpg"
                                                    alt="Black Sesame Seeds - HN International"
                                                />
                                            </div>
                                            <h4 className="uppercase hr-mid">
                                                <a href="#contact">Black Sesame Seeds</a>
                                            </h4>
                                            <h4 className="uppercase weight300">
                                                <a href="#contact">Make Inquiry</a>
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-4">
                                        <div className="person-box">
                                            <div className="image-wrapper">
                                                <img
                                                    src="images/raisins.jpg"
                                                    alt="Raisins - HN International"
                                                />
                                            </div>
                                            <h4 className="uppercase hr-mid">
                                                <a href="#contact">Raisins</a>
                                            </h4>
                                            <h4 className="uppercase weight300">
                                                <a href="#contact">Make Inquiry</a>
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-4">
                                        <div className="person-box">
                                            <div className="image-wrapper">
                                                <img src="images/sugar.jpg" alt="Sugar - HN International" />
                                            </div>
                                            <h4 className="uppercase hr-mid">
                                                <a href="#contact">Sugar</a>
                                            </h4>
                                            <h4 className="uppercase weight300">
                                                <a href="#contact">Make Inquiry</a>
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-4">
                                        <div className="person-box">
                                            <div className="image-wrapper">
                                                <img
                                                    src="images/cumin-seeds.jpg"
                                                    alt="Cumin Seeds - HN International"
                                                />
                                            </div>
                                            <h4 className="uppercase hr-mid">
                                                <a href="#contact">Cumin Seeds</a>
                                            </h4>
                                            <h4 className="uppercase weight300">
                                                <a href="#contact">Make Inquiry</a>
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-4">
                                        <div className="person-box">
                                            <div className="image-wrapper">
                                                <img
                                                    src="images/corriander-seeds.jpg"
                                                    alt="Coriander Seeds - HN International"
                                                />
                                            </div>
                                            <h4 className="uppercase hr-mid">
                                                <a href="#contact">Coriander Seeds</a>
                                            </h4>
                                            <h4 className="uppercase weight300">
                                                <a href="#contact">Make Inquiry</a>
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-4">
                                        <div className="person-box">
                                            <div className="image-wrapper">
                                                <img
                                                    src="images/fenugreek-seeds.jpg"
                                                    alt="Fenugreek Seeds - HN International"
                                                />
                                            </div>
                                            <h4 className="uppercase hr-mid">
                                                <a href="#contact">Fenugreek Seeds</a>
                                            </h4>
                                            <h4 className="uppercase weight300">
                                                <a href="#contact">Make Inquiry</a>
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-4">
                                        <div className="person-box">
                                            <div className="image-wrapper">
                                                <img
                                                    src="images/rapeseeds-meal.jpg"
                                                    alt="Rapeseed Meal - HN International"
                                                />
                                            </div>
                                            <h4 className="uppercase hr-mid">
                                                <a href="#contact">Rapeseed Meal</a>
                                            </h4>
                                            <h4 className="uppercase weight300">
                                                <a href="#contact">Make Inquiry</a>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="container" />
                    {/* <section class="call-box bg2">
    <div class="inner">
  <div class="container">
      <div class="row">
          <div class="table-cell col-md-7">
              <h2 class="uppercase">
                  Conviced Already?
              </h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Proin nibh augue, suscipit scelerisque.</p>
          </div>
          <div class="table-cell col-md-5 text-right">
              <a href="#" class="btn btn-border btn-lg large-padding">Tell Me More</a>
              <a href="#" class="btn-purchase btn btn-primary btn-lg large-padding">Purchase Corpress</a>
          </div>
      </div>
  </div>

    </div>
</section>

<div class="container"></div> */}
                    <div className="container" />
                    <div id="resources" className="scroll bg1">
                        <section className="section bg1">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12 text-center">
                                        <h2 className="uppercase hr-mid">Resources</h2>
                                        {/* <h4 class="uppercase weight300">How Good Are We?</h4> */}
                                        <div className="clearfix" />
                                    </div>
                                </div>
                                <div className="row section-top no-padding">
                                    {/*
	            <div class="col-xs-6 col-sm-4 col-md-2 text-center">
	                <div class="graph">
	                        <span class="percentage">
	                            75%
	                        </span>
	                    <canvas width="250" height="250" class="chart" data-percentage="75"></canvas>
	                </div>
	                <span class="h4">A</span>
	            </div>
	            <div class="col-xs-6 col-sm-4 col-md-2 text-center">
	                <div class="graph">
	                        <span class="percentage">
	                            50%
	                        </span>
	                    <canvas width="250" height="250" class="chart" data-percentage="50"></canvas>
	                </div>
	                <span class="h4">B</span>
	            </div>
	            <div class="clearfix visible-xs"></div>
	            <div class="col-xs-6 col-sm-4 col-md-2 text-center">
	                <div class="graph">
	                        <span class="percentage">
	                            100%
	                        </span>
	                    <canvas width="250" height="250" class="chart" data-percentage="100"></canvas>
	                </div>
	                <span class="h4">C</span>
	            </div>
	            <div class="clearfix visible-sm"></div>
	            <div class="col-xs-6 col-sm-4 col-md-2 text-center">
	                <div class="graph">
	                        <span class="percentage">
	                            50%
	                        </span>
	                    <canvas width="250" height="250" class="chart" data-percentage="50"></canvas>
	                </div>
	                <span class="h4">D</span>
	            </div>
	            <div class="clearfix visible-xs"></div>
	            <div class="col-xs-6 col-sm-4 col-md-2 text-center">
	                <div class="graph">
	                        <span class="percentage">
	                            100%
	                        </span>
	                    <canvas width="250" height="250" class="chart" data-percentage="100"></canvas>
	                </div>
	                <span class="h4">E</span>
	            </div>
	            <div class="col-xs-6 col-sm-4 col-md-2 text-center">
	                <div class="graph">
	                        <span class="percentage">
	                            50%
	                        </span>
	                    <canvas width="250" height="250" class="chart" data-percentage="50"></canvas>
	                </div>
	                <span class="h4">F</span>
	            </div>
	            */}
                                    <div className="col-sm-12" style={{ paddingTop: 25 }}>
                                        <h4 className="uppercase section-title no-margin">
                                            FINANCIAL STRENGTH
                                        </h4>
                                        <p>
                                            We at H. N. International have proud history of financial
                                            stability and credit profile. Our strong credit profile helps us
                                            carrying extra stocks throughout the year to abide by our
                                            commitment to make supplies in off-season also.
                                        </p>
                                        <h4 className="uppercase section-title no-margin">
                                            INFRASTRUCTURE
                                        </h4>
                                        <p>
                                            The company is situated in western part of India, company’s
                                            production facilities are spread over a vast area across India.
                                        </p>
                                        <p>
                                            Company possess various warehouse space, allocated CFS space
                                            &amp; well-trained workforce to professionally handle the
                                            shipments.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="container" />
                    <section id="network" className="section bg2 scroll">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 text-center">
                                    <h2 className="uppercase hr-mid">Our Network</h2>
                                    <br />
                                    <br />
                                </div>
                            </div>
                            <div className="row with-isotope">
                                <div className="col-sm-12 post">
                                    <p>
                                        We at H. N International are proud to have global network and
                                        tie-ups with various procurement agents and suppliers. Having a
                                        vast network helps us procure the raw material of superior quality
                                        at the lowest cost. Our clients gain much due to our network and
                                        capability of supplying superior quality in price-sensitive
                                        market.
                                    </p>
                                    <h4 className="uppercase section-title no-margin">
                                        Export Destinations:
                                    </h4>
                                    <p>
                                        <strong>We majorly supply to:</strong>
                                    </p>
                                    <ul id="countryColumns" className="ul3col">
                                        <li>Algeria</li>
                                        <li>Bangladesh</li>
                                        <li>Belgium</li>
                                        <li>Bulgaria</li>
                                        <li>Canada</li>
                                        <li>China</li>
                                        <li>Egypt</li>
                                        <li>France</li>
                                        <li>Germany</li>
                                        <li>Greece</li>
                                        <li>Indonesia</li>
                                        <li>Iran</li>
                                        <li>Israel</li>
                                        <li>Jordan</li>
                                        <li>Korea</li>
                                        <li>Kuwait</li>
                                        <li>Libya</li>
                                        <li>Malaysia</li>
                                        <li>Mexico</li>
                                        <li>Morocco</li>
                                        <li>Netherlands</li>
                                        <li>Pakistan</li>
                                        <li>Philippines</li>
                                        <li>Poland</li>
                                        <li>Qatar</li>
                                        <li>Romania</li>
                                        <li>Russia</li>
                                        <li>Saudi Arabia</li>
                                        <li>Singapore</li>
                                        <li>South Africa</li>
                                        <li>Spain</li>
                                        <li>Sri Lanka</li>
                                        <li>Syria</li>
                                        <li>Taiwan</li>
                                        <li>Thailand</li>
                                        <li>Tunisia</li>
                                        <li>Turkey</li>
                                        <li>U. A. E.</li>
                                        <li>Ukraine</li>
                                        <li>Yemen</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="container" />
                    <section
                        id="contact"
                        className="media-section darkbg scroll html5"
                        data-height={650}
                        data-type="video"
                        data-fallback-image="assets/images/content/parallax13.html"
                    >
                        <div className="video">
                            {/* FOR VIMEO VIDEOS in order for video to be muted you must add  &amp;api=1&amp;player_id=vimeoplayer1 to the end of the video src
      If you have more than one video, make sure that player_id and id have dif names on each video
    */}
                            <video
                                id="video1"
                                muted=""
                                loop=""
                                autoPlay="autoplay"
                                preload="auto"
                                poster="assets/images/content/keyboardvideo.html"
                            >
                                <source
                                    src="http://corpress.html.themeforest.createit.pl/assets/videos/keyboard.mp4"
                                    type="video/mp4"
                                />
                                <source
                                    src="http://corpress.html.themeforest.createit.pl/assets/videos/keyboard.webm"
                                    type="video/webm"
                                />
                            </video>
                        </div>
                        <div className="display-table">
                            <div className="inner bg5">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12 text-center">
                                            <h2 className="uppercase hr-mid section-title">Contact Us</h2>
                                        </div>
                                    </div>
                                    <div className="row section-top">
                                        <div className="col-sm-6">
                                            <ul className="icon-list list-unstyled">
                                                <li>
                                                    <div className="display-table">
                                                        <span className="table-cell">
                                                            <i className="fa fa-map-marker fa-lg" />
                                                        </span>
                                                        <span className="table-cell">
                                                            A/14, VijayKunj, Nehru Road, Santacruz (E),
                                                            <br />
                                                            Mumbai 400 055, India.
                                                        </span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="display-table">
                                                        <span className="table-cell">
                                                            <i className="fa fa-phone fa-lg" />
                                                        </span>
                                                        <span className="table-cell">+91 22 26650351</span>
                                                    </div>
                                                </li>
                                                {/* <li>
                          <div class="display-table">
                          <span class="table-cell">
                              <i class="fa fa-globe fa-lg"></i>
                          </span>
                          <span class="table-cell">
                              <a href="http://hninternational.in" style="color: #FFFFFF;">www.hninternational.in</a>
                          </span>
                          </div>
                      </li> */}
                                                <li>
                                                    <div className="display-table">
                                                        <span className="table-cell">
                                                            <i className="fa fa-envelope fa-lg" />
                                                        </span>
                                                        <span className="table-cell">
                                                            <a
                                                                href="mailto:info@hninternational.in"
                                                                style={{ color: "#FFFFFF" }}
                                                            >
                                                                info@hninternational.in
                                                            </a>
                                                        </span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-sm-6">
                                            <h4 className="uppercase getintouch">Get in touch</h4>
                                            <div
                                                className="successMessage alert alert-success"
                                                style={{ display: "none" }}
                                            >
                                                <button
                                                    type="button"
                                                    className="close"
                                                    data-dismiss="alert"
                                                    aria-hidden="true"
                                                >
                                                    ×
                                                </button>
                                                Thank You! Your email successfully submitted.
                                            </div>
                                            <div
                                                className="errorMessage alert alert-danger"
                                                style={{ display: "none" }}
                                            >
                                                <button
                                                    type="button"
                                                    className="close"
                                                    data-dismiss="alert"
                                                    aria-hidden="true"
                                                >
                                                    ×
                                                </button>
                                                Oops! An error occured. Please try again later.
                                            </div>
                                            <form
                                                role="form"
                                                action="http://www.hninternational.in/assets/form/send.php"
                                                method="post"
                                                className="contactForm validateIt"
                                                data-email-subject="Website Contact Form"
                                                data-show-errors="true"
                                            >
                                                <div className="row padding-xs-top">
                                                    <div className="col-md-6 col-sm-6">
                                                        <div className="form-group form-group-float-label">
                                                            <input
                                                                id="contact_name"
                                                                required=""
                                                                type="text"
                                                                name="field[]"
                                                                className="form-control input-lg"
                                                                placeholder="Name"
                                                            />
                                                            <label htmlFor="contact_name">Name *</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-sm-6">
                                                        <div className="form-group form-group-float-label">
                                                            <input
                                                                id="contact_email"
                                                                required=""
                                                                type="email"
                                                                name="field[]"
                                                                className="form-control input-lg"
                                                                placeholder="Email Address"
                                                            />
                                                            <label htmlFor="contact_email">Email *</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-xs-12 col-sm-12 col-md-12">
                                                        <div className="form-group form-group-float-label">
                                                            <textarea
                                                                id="contact_message"
                                                                className="form-control input-lg"
                                                                rows={4}
                                                                name="field[]"
                                                                required=""
                                                                placeholder="Message"
                                                                defaultValue={""}
                                                            />
                                                            <label htmlFor="contact_message">Message *</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-xs-12">
                                                        <button
                                                            type="submit"
                                                            className="btn btn-default btn-lg pull-right"
                                                        >
                                                            Send Message
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="container" />
                    {/* <div class="hidemap">
    <button class="mapToggle">
  Locate Us on Map <i class="fa fa-angle-up"></i>
    </button>
    <div class="googlemapcontainer">
  <div class="googlemap" data-location="Rajkot" data-height="460" data-offset="0" data-zoom="16"></div>
    </div>
</div>

<div class="container"></div> */}
                    <div className="post-footer">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-6">
                                    Copyright 2019 ©{" "}
                                    <a href="index.html" target="_blank">
                                        HN International
                                    </a>
                                    . All rights reserved.
                                </div>
                                <div className="col-sm-6 text-right">
                                    {/* <ul class="list-inline">
              <li><div class="text-wrapper"><a href="https://www.facebook.com/createITpl" target="_blank" data-toggle="tooltip" data-placement="top" title="" data-original-title="Facebook"><i class="fa fa-facebook fa-fw"></i></a></div></li>
              <li><div class="text-wrapper"><a href="https://twitter.com/createitpl" target="_blank" data-toggle="tooltip" data-placement="top" title="" data-original-title="Twitter"><i class="fa fa-twitter fa-fw"></i></a></div></li>
              <li><div class="text-wrapper"><a href="#" target="_blank" data-toggle="tooltip" data-placement="top" title="" data-original-title="Google +"><i class="fa fa-google-plus fa-fw"></i></a></div></li>
              <li><div class="text-wrapper"><a href="#" target="_blank" data-toggle="tooltip" data-placement="top" title="" data-original-title="LinkedIn"><i class="fa fa-linkedin fa-fw"></i></a></div></li>
              <li><div class="text-wrapper"><a href="#" target="_blank" data-toggle="tooltip" data-placement="top" title="" data-original-title="Pinterest"><i class="fa fa-pinterest fa-fw"></i></a></div></li>
              <li><div class="text-wrapper"><a href="#" target="_blank" data-toggle="tooltip" data-placement="top" title="" data-original-title="Dribble"><i class="fa fa-dribbble fa-fw"></i></a></div></li>
              <li><div class="text-wrapper"><a href="#" target="_blank" data-toggle="tooltip" data-placement="top" title="" data-original-title="Tumblr"><i class="fa fa-tumblr fa-fw"></i></a></div></li>
              <li><div class="text-wrapper"><a href="#" target="_blank" data-toggle="tooltip" data-placement="top" title="" data-original-title="Instagram"><i class="fa fa-instagram fa-fw"></i></a></div></li>
              <li><div class="text-wrapper"><a href="#" target="_blank" data-toggle="tooltip" data-placement="top" title="" data-original-title="Flickr"><i class="fa fa-flickr fa-fw"></i></a></div></li>
          </ul> */}
                                    Designed &amp; Developed By:{" "}
                                    <a href="https://rudrasoftwares.net/" target="_blank">
                                        RudraSoftwares.Net
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* IE */}
                {/* Revolution Slider */}
                {/* magnific popup */}
                {/* Contact form validation */}
                {/* our main JS file */}
            </>

        </>
    )
}

export default Home;