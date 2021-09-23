//carousel HomePage

import React from 'react';
import { CarouselProvider, Slider, Slide, DotGroup } from 'pure-react-carousel';
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
                naturalSlideWidth={10}
                naturalSlideHeight={10}
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
}

export default carousel;