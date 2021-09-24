import run from '../../assets/images/run.jpg'
import pool from '../../assets/images/pool.jpg'
import tennis from '../../assets/images/tennis.jpg'

import './style.scss';

import CardTrainning from './trainning';



const Training = () => {
    return (
        <div className= 'trainnings'>
            <CardTrainning image= {run}/>
            <CardTrainning image= {pool}/>
            <CardTrainning image= {tennis}/>
        </div>
    );
};

export default Training;