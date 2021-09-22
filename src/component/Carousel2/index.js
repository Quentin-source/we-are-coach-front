import './style.scss';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Image, Item } from 'semantic-ui-react';

const Carousel2 = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        autoplay: false,
        variableWidth:false,
    };
    return (
        <Slider {...settings}>        
            
            <div index={0}><img className="carousel-image" src="http://localhost/apo/projet-workout-plan-front/src/assets/images/img01.jpg" alt="fans de sprot" />
            
            </div>
            <div index={1}><img className="carousel-image" src="http://localhost/apo/projet-workout-plan-front/src/assets/images/img02.jpg" alt="fans de sprot" />Titre</div>
            <div index={2}><img className="carousel-image" src="http://localhost/apo/projet-workout-plan-front/src/assets/images/img03.jpg" alt="fans de sprot" />Titre</div>
            <div index={3}><img className="carousel-image" src="http://localhost/apo/projet-workout-plan-front/src/assets/images/img04.jpg" alt="fans de sprot" />Titre</div>
            <div index={4}><img className="carousel-image" src="http://localhost/apo/projet-workout-plan-front/src/assets/images/img05.jpg" alt="fans de sprot" />Titre</div>        
        </Slider>
    );
}

export default Carousel2;