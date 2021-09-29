import run from '../../assets/images/run.jpg'
import pool from '../../assets/images/pool.jpg'
import tennis from '../../assets/images/tennis.jpg'
import Typography from '@mui/material/Typography';


import Filters from './Filters'

import './style.scss';

import CardTrainning from './Training/';
import SearchBar from './SearchBar';
import Pagination from './Pagination';



const Trainings = () => {


    return (
        <main className="main-content main-content-trainings">
            <div>
                <Filters />
                <SearchBar />
            </div>
            <div>           
                <Typography variant="h6" gutterBottom component="div">
        Résultats de la recherche
                </Typography>           
            </div>
            <div className= 'trainnings'>
                <CardTrainning image= {run}/>
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
                <CardTrainning image= {tennis}/>
                <div>
                    <Pagination />  
                </div>
            </div>
        </main>
    );
};

export default Trainings;