import './style.scss';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import CategoryCard from './CategoryCard';
import { useDispatch } from 'react-redux';

const Categories = () => {

    const dispatch = useDispatch();

    const handleCompleteLoading = () => (dispatch({type:'TOGGLE_LOADING'}));


    const settings = {
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 5000,
        autoplay: true,
        arrows : true,
    };
    return (
        <Slider className="categories" {...settings} onInit={handleCompleteLoading}>        
            
            <div index={0}>
                <img 
                    className="category-image" 
                    src="http://localhost/apo/projet-workout-plan-front/src/assets/images/img01.jpg" 
                    alt="fans de sprot" 
                />
                <CategoryCard title="La Nage" text="tropb bien ce sport il faut le test!!"/>
            </div>
            <div index={1}>
                <img 
                    className="category-image" 
                    src="http://localhost/apo/projet-workout-plan-front/src/assets/images/img02.jpg" 
                    alt="fans de sprot" 
                />
                <CategoryCard title="La Sport 2" text="tropb bien ce sport il faut le test!!"/>
            </div>
            <div index={2}>
                <img 
                    className="category-image" 
                    src="http://localhost/apo/projet-workout-plan-front/src/assets/images/img03.jpg" 
                    alt="fans de sprot" 
                />
                <CategoryCard title="Le Sport 3" text="tropb bien ce sport il faut le test!!"/>
            </div>           
        </Slider>
    );
}

export default Categories;