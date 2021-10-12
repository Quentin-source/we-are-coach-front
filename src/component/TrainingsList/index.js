import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Redirect } from 'react-router-dom';
import { Avatar, Button, TextField} from '@mui/material';
import { Edit, CheckCircleOutline, HighlightOff, DeleteOutline, ArrowBack, Add} from '@material-ui/icons';
import NavButton from '../Materials/NavButton';
import CustomLevel from '../Materials/CustomLevel';
import EditTrainingPop from "../PopUp/EditTrainingPop";

import {isMineTraining} from '../../selectors/training';



import './style.scss';

const TrainingList = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    
    const isConnected = useSelector((state) => state.home.connected);

    
    const id = useSelector((state)=> state.user.id);
    const pseudo = useSelector((state)=>state.user.pseudo);
    const picture = useSelector((state)=>state.user.picture);

    const trainings = useSelector((state)=> state.user.trainings);

    const loading = useSelector((state)=>state.home.loading);

    const handleEditTraining = (event, training) => {

        dispatch({type:'TOGGLE_EDIT_TRAINING'})
        dispatch({
            type:'FETCH_TRAINING_DETAILS',
            slug : training.id,
        })

        console.log(event.target);
        event.target.classList.toggle('navbar-button--open');    
    };

    const handleSupressTraining = (event, training) => {

        console.log(event.target);
        event.target.classList.toggle('navbar-button--open');    

        if (window.confirm('Etes vous sûr de vouloir supprimer cet entrainement?'))
            dispatch({
                type:'ASK_TRAINING_SUPRESS',
                id : training.id,
            });
    
    };

    const handleAddTraining = (event) => {

        console.log(event.target);
        event.target.classList.toggle('navbar-button--open');    
        history.push('/CreerEntrainement');

    }

    useEffect(()=>{
        dispatch({type:'LOADING_ON'});
        dispatch({type : 'CLEAN_MENU'});
        dispatch({
            type:'FETCH_USER_TRAININGS',
            id : id,    
        }); 
    },[]);
    



    return (
       
        <main className="main-content">
            {!isConnected && <Redirect to="/" />}
            
            
            <h2 className="main-content-title" >
                Liste de mes entrainements  
            </h2>
            <div 
                className={`training-list-group-aside ${!loading && 'animate__animated animate__faster animate__fadeInRight'}`}    
            >
                <div className="training-list-coach">
                    <Avatar src={picture} />
                    <p>{pseudo}</p>
                    
                </div>       
                
                <NavButton  
                    content={<Add />} 
                    handleClick={handleAddTraining}
                    className="training-list-button-edit navbar-button"
                />
                    
            </div>
                

            <section className="training-list">
                {trainings.map((training, index)=> (
                    <div 
                        key={training.id}
                        className={`training-list-card ${!loading && 'animate__animated animate__fadeInLeft'}`}
                        style={{
                            animationDelay : `${index/10}s`,
                            animationDuration : '0.2s',
                        }} 
                    >
                        <img  src={training.picture} alt="illustration de l'entrainement"/>
                        <div 
                            className="training-list-card-content"
                            onClick={()=> history.push(`/Entrainement/${training.id}`)}  
                        >
                            <h2>{training.name}</h2>
                            <div className="training-list-card-content-date">{training.published_at}</div>
                        </div>
                        <>
                            <NavButton  
                                content={<DeleteOutline />}
                                handleClick={(event)=> handleSupressTraining(event, training)}
                                className='training-list-button-supress navbar-button'
                            />
                            <NavButton  
                                content = {<Edit />}
                                handleClick={(event) => handleEditTraining(event, training)}
                                className="training-list-button-edit navbar-button"
                            />
                        </>
                    </div>))}
            
                

            </section>
            <EditTrainingPop />

        </main >
    )
}

export default TrainingList;


