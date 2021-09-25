import './style.scss';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import CategoryCard from './CategoryCard';

const Categories = () => {

    const settings = {
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
        autoplay: true,
        arrows : true,
        lazyLoad : true,
    };
    return (
        <Slider className="categories" {...settings}>    
            
            <div index={0}>
                <img 
                    className="category-image" 
                    src="http://localhost/apo/projet-workout-plan-front/src/assets/images/img01.jpg" 
                    alt="fans de sport" 
                />
                <CategoryCard title="La Nage" text="trop bien ce sport il faut le test!!"/>
            </div>
            <div index={1}>
                <img 
                    className="category-image" 
                    src="http://localhost/apo/projet-workout-plan-front/src/assets/images/img02.jpg" 
                    alt="fans de sprot" 
                />
                <CategoryCard title="La Sport 2" text="trop bien ce sport il faut le test!!"/>
            </div>
            <div index={2}>
                <img 
                    className="category-image" 
                    src="http://localhost/apo/projet-workout-plan-front/src/assets/images/img03.jpg" 
                    alt="fans de sprot" 
                />
                <CategoryCard title="Le Sport 3" text="trop bien ce sport il faut le test!!"/>
            </div>           
        </Slider>
    );
}

export default Categories;