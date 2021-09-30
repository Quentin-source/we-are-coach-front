import './style.scss';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import CategoryCard from './CategoryCard';
import { useSelector } from 'react-redux';

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

    const categoriesList = useSelector((state)=>(state.home.cat));
       
    return (
        <Slider className="categories" {...settings}>    
            
            {categoriesList.map((category)=> (
                <div index={(category.id)-1}>
                    <img 
                        className="category-image" 
                        src={category.picture} 
                        alt={category.name} 
                    />
                    <CategoryCard title={category.name} text={category.description}/>
                </div>
            ))}    
            
        </Slider>
    );
}

export default Categories;