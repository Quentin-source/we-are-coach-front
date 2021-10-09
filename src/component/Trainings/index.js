
import Typography from '@mui/material/Typography';

import './style.scss';

import CardTrainning from './Training/';
import TrainingsHeader from './Header';
import Pagination from './Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';



const Trainings = () => {
    const dispatch = useDispatch();
    
    
    useEffect(()=> {
        dispatch({type:'LOADING_ON'});
        dispatch({type:'FETCH_TRAININGS'});
        dispatch({type : 'CLEAN_MENU'});
    }, []);

    const displayedTrainingsArray = useSelector((state)=>state.trainings.displayedTrainings);
    return (
        <main className="main-content main-content-trainings">
            <TrainingsHeader />
            <div>           
                <Typography variant="h6" gutterBottom component="div">
        Résultats de la recherche
                </Typography>           
            </div>
            <div className= 'trainings'>
                {displayedTrainingsArray.map((training, index) =>  (<CardTrainning key={index} training={training} />))}
              
            </div>
            <Pagination />  
    
        </main>
    );
};

export default Trainings;