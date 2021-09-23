//carousel HomePage

import React from 'react';
import { CarouselProvider, Slider, Slide, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Image } from 'semantic-ui-react';
import motocross from '../../assets/images/motocross.jpg';
import musculation from '../../assets/images/musculation.jpg';
import surf from '../../assets/images/surf.jpg';
import './style.scss';
 
const Category = () => {
    return (
        <CarouselProvider
            naturalSlideWidth={1000}
            naturalSlideHeight={1000}
            totalSlides={3}
            isPlaying={true}
            interval={3000}
            infinite={false}
        
        >
            <div className="slide">
                <Slider >
        
                    <Slide index={0}
                    >
                        <Image src={motocross}
                            alt="photo"/>
                        <div className="topo">
                            <h2 className="title">Motocross</h2>
                            <p className="text">Essayez ce sport, il est incroyable!</p>
                        </div>
                        <div className="dot">
                            <DotGroup 
                                showAsSelectedForCurrentSlideOnly={false}
                            />
                        </div>
                    </Slide>
                    
                    
                    <Slide index={1}>
                        <Image src={musculation}
                            alt="photo2"/>
                        <div className="topo">
                            <h2 className="title">Musculation</h2>
                            <p className="text">Essayez ce sport, il est incroyable!</p>
                        </div>
                        <div className="dot">
                            <DotGroup 
                                showAsSelectedForCurrentSlideOnly={false}
                            />
                        </div>
                    </Slide>
                    <Slide index={2}>
                        <div className="surf">
                            <Image src={surf}
                                alt="photo3"/>
                        </div>
                        <div className="topo">
                            <h2 className="title">Surf</h2>
                            <p className="text">Essayez ce sport, il est incroyable!</p>
                        </div>
                        <div className="dot">
                            <DotGroup 
                                showAsSelectedForCurrentSlideOnly={false}
                            />
                        </div>
                    </Slide>
                </Slider>
            </div>
            
        </CarouselProvider>
    );
}


export default Category;

const Carousel2 = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        autoplay: false,
        variableWidth:false,
    };
    return (
        <Slider className="carousel2" {...settings}>        
            
            <div index={0}>
                <img 
                    className="carousel2-image" 
                    src="http://localhost/apo/projet-workout-plan-front/src/assets/images/img01.jpg" 
                    alt="fans de sprot" 
                />
                <CategoryCard />
            </div>
            <div index={1}>
                <img 
                    className="carousel2-image" 
                    src="http://localhost/apo/projet-workout-plan-front/src/assets/images/img02.jpg" 
                    alt="fans de sprot" 
                />
                <CategoryCard />
            </div>
            <div index={2}>
                <img 
                    className="carousel2-image" 
                    src="http://localhost/apo/projet-workout-plan-front/src/assets/images/img03.jpg" 
                    alt="fans de sprot" 
                />
                <CategoryCard />
            </div>           
        </Slider>
    );
}

export default Category;