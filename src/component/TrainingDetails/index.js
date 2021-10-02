import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import PropTypes from 'prop-types';

import { Paper, Typography } from '@mui/material';

import './style.scss';

const TrainingDetails = () => {
    const dispatch = useDispatch();
    // dispatch({type:'LOADING_ON'});

    useEffect(()=>{
        dispatch({type:'FETCH_TRAINING_DETAILS'}); 
    });
    
    return (
        <main className="main-content main-content-home">
            <Paper>
                <Typography variant="h5">
                    Titre de l'entrainement
                </Typography>

            </Paper>
        </main>
    );
}

export default TrainingDetails;