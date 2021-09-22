import { CarouselProvider, Slider, Slide, Image, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Icon } from 'semantic-ui-react';
import './style.scss';

const Carousel = () => {
    return (
        <>
            <CarouselProvider
                naturalSlideWidth={125}
                naturalSlideHeight={100}
                totalSlides={5}
            >
                <ButtonBack className="carousel-button carousel-button-left" children={<Icon fitted name='angle left' inverted size="huge" />}/>
                <Slider className="carousel">
                    
                    <Slide index={0}><Image className="carousel-image" src="http://localhost/apo/projet-workout-plan-front/src/assets/images/img01.jpg" alt="fans de sprot" isBgImage={true}/>Titre</Slide>
                    <Slide index={1}><Image className="carousel-image" src="http://localhost/apo/projet-workout-plan-front/src/assets/images/img02.jpg" alt="fans de sprot" isBgImage={true}/>Titre</Slide>
                    <Slide index={2}><Image className="carousel-image" src="http://localhost/apo/projet-workout-plan-front/src/assets/images/img03.jpg" alt="fans de sprot" isBgImage={true}/>Titre</Slide>
                    <Slide index={3}><Image className="carousel-image" src="http://localhost/apo/projet-workout-plan-front/src/assets/images/img04.jpg" alt="fans de sprot" isBgImage={true}/>Titre</Slide>
                    <Slide index={4}><Image className="carousel-image" src="http://localhost/apo/projet-workout-plan-front/src/assets/images/img05.jpg" alt="fans de sprot" isBgImage={true}/>Titre</Slide>
                    
                </Slider>
                <ButtonNext className="carousel-button carousel-button-right" children={<Icon fitted name='angle right' inverted size="huge" />}/>
            </CarouselProvider>
            
        </>
    );
}

export default Carousel;