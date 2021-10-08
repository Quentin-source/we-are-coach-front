import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { Divider} from '@mui/material';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import CustomLevel from '../Materials/CustomLevel'

import './style.scss';
import EditUserPop from '../PopUp/EditUserPop';

const Profile = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector((state)=>state.user.user);
    const connected = useSelector((state)=>state.home.connected);


    useEffect(()=>{
        dispatch({type:'LOADING_ON'});
        dispatch({type:'FETCH_USER'}); 
        dispatch({type : 'CLEAN_MENU'});
        dispatch({
            type :'UPLOAD_USER_PICTURE',
            file: user.picture,
        });
    },[]);
    
    const settings = {
        infinite: false,
        dots:true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        arrows : true,
        lazyLoad : true,
    };

    const handleClickTraining = (event, id) => { 
        history.push(`/Entrainement/${id}`);
    };
    
    if (!connected) history.push('/');
    return (
        <main className="main-content">
            <h2 className="main-content-title" >
                    Profil utilisateur
            </h2>

            
            
            <section className="user-profile">
                <div className="user-profile-header">
                    <img className="user-profile-avatar" src={user.picture} alt="Avatar de l'utilisateur"/>   
                    <h3 className="user-profile-title">{user.pseudo}</h3>   
                    <EditUserPop user={user}/>
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
                                onClick={(event) => handleClickTraining(event, training.id) }
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
                                    <span className="level">
                                        <CustomLevel level = {training.level}/>
                                    </span>
                                    <span className="date">
                                        {training.published_at}
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