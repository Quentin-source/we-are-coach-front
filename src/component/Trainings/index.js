import run from '../../assets/images/run.jpg'
import pool from '../../assets/images/pool.jpg'
import tennis from '../../assets/images/tennis.jpg'

import './style.scss';

import CardTrainning from './training';
import SearchBar from '../SearchBar';



const Trainings = () => {
    return (
        <div>
            <div>
                <SearchBar />
            </div>
            <div className= 'trainnings'>
                <CardTrainning image= {run}/>
                <CardTrainning image= {pool}/>
                <CardTrainning image= {tennis}/>
            </div>
        </div>
    );
};

export default Trainings;