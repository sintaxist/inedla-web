import PointsDetails from './PointsDetails';
import OwlCarousel from 'react-owl-carousel';
import pointsData from '../../data/PointsData';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../../styles/Points.scss';

const Points = () => {

    //Owl Carousel Settings
    const options = {
        loop: true,
        // center: true,
        // autoWidth: true,
        items: 3,
        // autoplay: true,
        dots: true,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        nav: false,
        margin: 70,
        // stagePadding: 30,
        // Se pueden ver los contenedores vecinos
        responsive: {
            0:{
                items: 1
            },
            560:{
                items: 2
            },
            960: {
                items: 3
            },
            1000:{
                items: 3
            }
        }
    };
    return (
        <OwlCarousel id="Points-carousel" className="points-carousel" {...options}>
            {
                pointsData.length === 0 ?
                    <div>No points Allowed</div> :
                    pointsData.map(pointDetail => {
                        return (
                            <PointsDetails pointDetail={pointDetail} key={pointDetail.id} />

                        )
                    })
            }
        </OwlCarousel>
    );
};

export default Points;