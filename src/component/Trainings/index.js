import run from '../../assets/images/run.jpg'
import pool from '../../assets/images/pool.jpg'
import tennis from '../../assets/images/tennis.jpg'
import Typography from '@mui/material/Typography';

import './style.scss';

import CardTrainning from './Training/';
import TrainingsHeader from './Header';
import Pagination from './Pagination';
import { useSelector } from 'react-redux';



const Trainings = () => {

    const displayedTrainingsArray = useSelector((state)=>state.trainings.diplayedTrainings);
    return (
        <main className="main-content main-content-trainings">
            <TrainingsHeader />
            <div>           
                <Typography variant="h6" gutterBottom component="div">
        Résultats de la recherche
                </Typography>           
            </div>
            <div className= 'trainnings'>
                {displayedTrainingsArray.map((training) =>  (<CardTrainning image= {run}/>))}
                {/* <CardTrainning image= {run}/>
                <CardTrainning image= {pool}/>
                <CardTrainning image= {tennis}/>
                <CardTrainning image= {run}/>
                <CardTrainning image= {pool}/>
                <CardTrainning image= {tennis}/>
                <CardTrainning image= {run}/>
                <CardTrainning image= {pool}/>
                <CardTrainning image= {tennis}/>
                <CardTrainning image= {run}/>
                <CardTrainning image= {pool}/>
                <CardTrainning image= {tennis}/> */}
                <div>
                    <Pagination />  
                </div>
            </div>
        </main>
    );
};

export default Trainings;