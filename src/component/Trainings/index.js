import run from '../../assets/images/run.jpg'
import pool from '../../assets/images/pool.jpg'
import tennis from '../../assets/images/tennis.jpg'

import Filters from './Filters'

import './style.scss';

import CardTrainning from './Training/';
import SearchBar from './SearchBar';



const Trainings = () => {
    return (
        <main className="main-content main-content-trainings">
            <Filters />
            <SearchBar />
            <div className= 'trainnings'>
                <CardTrainning image= {run}/>
                <CardTrainning image= {pool}/>
                <CardTrainning image= {tennis}/>
            </div>
        </main>
    );
};

export default Trainings;