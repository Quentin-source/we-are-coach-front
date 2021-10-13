
import Typography from '@mui/material/Typography';

import './style.scss';

import CardTrainning from './Training/';
import TrainingsHeader from './Header';
import Pagination from './Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { memo } from 'react';





const Trainings = () => {
    const dispatch = useDispatch();
    const pageSize = useSelector((state)=> state.trainings.pageSize);
    const currentPage = useSelector((state)=> state.trainings.currentPage);
    const loading = useSelector((state)=> state.home.loading);

    const handleModifyPageSize = (pageSize, currentPage) => {
        let askedPageSize = Math.floor(window.innerWidth/350);
        console.log(askedPageSize, pageSize);
        
        if ((askedPageSize !== pageSize) && (askedPageSize < 4)) {
            dispatch({
                type : 'CHANGE_PAGE_SIZE',
                value : askedPageSize,
            });
            dispatch({
                type:'CHANGE_PAGE',
                value : currentPage,
            });
        };
    }


    useEffect(()=> {
        dispatch({type:'LOADING_ON'});
        dispatch({type:'FETCH_TRAININGS'});
        dispatch({type : 'CLEAN_MENU'});
        handleModifyPageSize(pageSize,currentPage);
        window.addEventListener('resize', () => handleModifyPageSize(pageSize, currentPage));
    }, []);

    useEffect(()=> () => {
        window.removeEventListener('resize',() => handleModifyPageSize(pageSize, currentPage));
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
                {displayedTrainingsArray.map((training, index) =>  (
                    <CardTrainning 
                        key={index} 
                        training={training}
                        index={index}
                    />
                ))}
              
            </div>
            <Pagination />  
    
        </main>
    );
};

export default memo(Trainings);