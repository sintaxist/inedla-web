import TestiMonialsDetails from './TestiMonialsDetails';
import OwlCarousel from 'react-owl-carousel';
import testiMonialsData from '../../data/TestimonialsData';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {Content} from '../utils/UseElements';
import '../../styles/TestiMonials.scss';

const TestiMonials = () => {

    //Owl Carousel Settings
    const options = {
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: true,
        dots: true,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        nav: false,
        // stagePadding: 30,
        // Se pueden ver los contenedores vecinos
        responsive: {
            0:{
                items: 1
            },
            960: {
                items: 1
            },
            1000:{
                items: 3
            }
        }
    };
    return (
        <Content>
            <h1 className="blue-title">TESTIMONIOS</h1>
            <OwlCarousel id="customer-testimonoals" className="owl-carousel owl-theme" {...options}>
                {
                    testiMonialsData.length === 0 ?
                        <div>No testimonials Allowed</div> :
                        testiMonialsData.map(testiMonialDetail => {
                            return (
                                <TestiMonialsDetails testiMonialDetail={testiMonialDetail} key={testiMonialDetail._key} />

                            )
                        })
                }
            </OwlCarousel>
        </Content>
    );
};

export default TestiMonials;