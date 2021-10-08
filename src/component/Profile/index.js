import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Divider} from '@mui/material';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Training from '../Trainings/Training'
import NavButton from '../Materials/NavButton';

import './style.scss';
import { HdrOnSelectRounded } from '@mui/icons-material';

const Profile = () => {
    const dispatch = useDispatch();
    dispatch({type:'REDIRECT_OFF'});
    const user = useSelector((state)=>state.user.user);

    useEffect(()=>{
        dispatch({type:'LOADING_ON'});
        dispatch({
            type:'FETCH_USER'    
        }); 
    },[]);
    
    const settings = {
        infinite: false,
        dots:true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        arrows : true,
        lazyLoad : true,
    };

   

   
   
    

    return (
        <main className="main-content">
            <h2 className="main-content-title" >
                    Profil utilisateur
            </h2>

            
            
            <section className="user-profile">
                <div className="user-profile-header">
                    <img className="user-profile-avatar" src={user.picture} alt="Avatar de l'utilisateur"/>   
                    <h3 className="user-profile-title">{user.pseudo}</h3>   
                </div>
                <div className="user-profile-id">  
                    <h3 className="user-profile-name"><span>Prénom</span>{`${user.firstname} `}<span>Nom</span>{user.lastname}</h3>   
                    <Divider />
                    <h4 className="user-profile-info"><span>Age</span>{user.age}<span>Ville</span>{user.city}</h4>
                    <Divider/>
                    <h4 className="user-profile-info"><span>email</span>{user.email}</h4>
                    <Divider/>
                    <h4 className="user-profile-info"><span>Sports pratiqués</span>{`${user.sport1} - ${user.sport2} - ${user.sport3}`}</h4>

                    
                </div>


                    
                    
            </section>

            <section className="user-profile-trainings">
                
                <Slider className="user-profile-trainings-slider" {...settings}>    
                
                    {user.hasOwnProperty('workout') && user.workout.map((training)=> (
                        <div key={training.id} index={(training.id)-1}>
                            <img 
                                className="user-profile-trainings-slider-image" 
                                src={training.picture} 
                                alt={training.name} 
                            />
                            <div 
                                className="user-profile-trainings-slider-infos"
                            >   
                                <div className="user-profile-trainings-slider-infos-header">
                                    <span className="name">
                                        {training.name}
                                    </span>
                                    <span className="category">
                                        {training.sport.name}
                                    </span>
                                </div>
                                <div className="user-profile-trainings-slider-infos-footer">
                                    <span className="name">
                                        {training.name}
                                    </span>
                                    <span className="category">
                                        {training.sport.name}
                                    </span>
                                </div>

                            </div>
                           

                        </div>
                    ))}    
                
                </Slider>
            </section>

        </main >
    )
}

export default Profile;