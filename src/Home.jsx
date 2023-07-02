import { useEffect } from "react";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import $ from 'jquery';
import About from "./components/About";
import Product from "./components/Product";
import Whyus from "./components/Whyus";
import Event from "./components/Event";
import Counter from "./components/Counter";
import Footer from "./components/Footer";
import Carouseldemo from "./components/Carouseldemo";

const Home = () => {

    var loadScript = function (src) {
        var tag = document.createElement('script');
        tag.async = false;
        tag.src = src;
        document.getElementsByTagName('body')[0].appendChild(tag);
    }

    useEffect(() => {

      
        window.scrollTo({ top: 0, behavior:'smooth' });
            
        loadScript('js/jquery-1.12.4.min.js')
        loadScript('js/bootstrap.min.js')
        loadScript('js/owl.carousel.min.js')
        loadScript('js/jquery.meanmenu.js')
        loadScript('js/plugins.js')
        loadScript('js/main.js')
        loadScript('js/main-slider-script.js')
        loadScript('js/jquery.themepunch.revolution.min.js')
        loadScript('js/jquery.themepunch.tools.min.js')
        loadScript('js/extensions/revolution.extension.actions.min.js')
        loadScript('js/extensions/revolution.extension.carousel.min.js')
        loadScript('js/extensions/revolution.extension.layeranimation.min.js')
        loadScript('js/extensions/revolution.extension.migration.min.js')
        loadScript('js/extensions/revolution.extension.navigation.min.js')
        loadScript('js/extensions/revolution.extension.parallax.min.js')
        loadScript('js/extensions/revolution.extension.slideanims.min.js')
        loadScript('js/extensions/revolution.extension.video.min.js')
        $(document).ready(function () {
            $("#testimonial-slider").owlCarousel({
                items: 1,
                itemsDesktop: [1199, 2],
                itemsDesktopSmall: [979, 2],
                itemsTablet: [768, 2],
                itemsMobile: [600, 1],
                pagination: true,
                navigation: false,
                navigationText: ["", ""],
                slideSpeed: 1000,
                autoPlay: true
            });
        });

        $(document).ready(function () {
            $('.counter-value').each(function () {
                $(this).prop('Counter', 0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 3500,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });
        });

        // $('.owl-event').owlCarousel({
        //     loop: true,
        //     margin: 30,
        //     autoplay: true,
        //     responsive: {
        //         0: {
        //             items: 1
        //         },
        //         600: {
        //             items: 3
        //         },
        //         1000: {
        //             items: 3
        //         }
        //     }
        // })
    }, [])

    return (
        <>
            {/* <Header /> */}
            {/* <Carousel /> */}
            <Carouseldemo/>
            <About/>
            {/* <Product/> */}
            <Whyus/>
            {/* <Event/> */}
            <Counter/>
            {/* <Footer/> */}
        </>
    )
}

export default Home;