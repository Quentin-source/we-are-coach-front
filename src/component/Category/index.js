//carousel 

import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Image } from 'semantic-ui-react';
import motocross from '../../assets/images/motocross.jpg';
import musculation from '../../assets/images/musculation.jpg';
import surf from '../../assets/images/surf.jpg';
import './style.scss';
 
class carousel extends React.Component {
    render() {
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
                            <Image src={motocross}/>
                            <div className="topo">
                                <h2 className="title">Motocross</h2>
                                <p className="text">Essayez ce sport, il est incroyable!</p>
                            </div>
                        </Slide>
                        
                        
                        <Slide index={1}>
                            <Image src={musculation}/>
                            <div className="topo">
                                <h2 className="title">Musculation</h2>
                                <p className="text">Essayez ce sport, il est incroyable!</p>
                            </div>
                        </Slide>
                        <Slide index={2}>
                            <Image src={surf}/>
                            <div className="topo">
                                <h2 className="title">Surf</h2>
                                <p className="text">Essayez ce sport, il est incroyable!</p>
                            </div>
                        </Slide>
                    </Slider>
                </div>
                <ButtonBack>Back</ButtonBack>
                <ButtonNext>Next</ButtonNext>
            </CarouselProvider>
        );


    }
}

export default carousel;