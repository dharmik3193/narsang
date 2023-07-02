import React, { Component, useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
// import 'animate.css/animate.css'
import WOW from 'wowjs';

const Carouseldemo = () => {

    useEffect(() => {

        new WOW.WOW({
            live: false
        }).init();

    }, [])

    const slider = () => {
        console.log("Slider");
        // if ($.isFunction('owlCarousel')) {
        const wow = new WOW.WOW();
        // var owl = $('.owl-carousel');
        // owl.owlCarousel();
        // owl.on('changed.owl.carousel', function (event) {
        wow.init();
        // })
        // }
    }

    return (
        <>
            <div className='main-slider'>

                <div >
                    <OwlCarousel items={1}
                        className="owl-theme"
                        loop={true}
                        nav={false}
                        dots={false}
                        autoplay={true}
                        margin={0}
                        animateIn={'fadeIn'}
                        animateOut={'fadeOut'}
                        onChange={()=>{slider()}}
                    >
                        <div className='relative'>
                            <img className="img" src="img/slider-2.jpg" />
                            <div className='description-slider'>
                                <h2 className="wow fadeInRight">The Best Export <br />Company In Town</h2>
                                <div className="text wow fadeInUp"> One Of The Oldest And Most Reputed Importers</div>
                            </div>
                        </div>
                        <div className='relative'>
                            <img className="img" src="img/slider-1.jpg" />
                            <div className='description-slider'>
                                <h2 className="wow fadeInRight">The Best Export <br />Company In Town</h2>
                                <div className="text wow fadeInUp"> One Of The Oldest And Most Reputed Importers</div>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>

            </div>
        </>
    )
}

export default Carouseldemo;