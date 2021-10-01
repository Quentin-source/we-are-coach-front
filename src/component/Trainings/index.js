import run from '../../assets/images/run.jpg'

import Typography from '@mui/material/Typography';

import './style.scss';

import CardTrainning from './Training/';
import TrainingsHeader from './Header';
import Pagination from './Pagination';
import { useDispatch, useSelector } from 'react-redux';



const Trainings = () => {
    const dispatch = useDispatch();
    dispatch({type:'FETCH_TRAINING'});
    const displayedTrainingsArray = useSelector((state)=>state.trainings.diplayedTrainings);
    return (
        <main className="main-content main-content-trainings">
            <TrainingsHeader />
            <div>           
                <Typography variant="h6" gutterBottom component="div">
        Résultats de la recherche
                </Typography>           
            </div>
            <div className= 'trainings'>
                {displayedTrainingsArray.map((training, index) =>  (<CardTrainning key={index} image= {run}/>))}
              
            </div>
            <Pagination />  
    
        </main>
    );
};

export default Trainings;