//test HomePage Training
import {List, ListItem, Divider, ListItemText, ListItemAvatar, Avatar, Typography, Container } from '@mui/material';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import './style.scss';


const HomeTraining = () => {
    const history = useHistory();
    const loading = useSelector((state)=> state.home.loading);
    const topTrainings = useSelector((state)=>(state.home.bestWorkout));
    let number = 1;
    return (
        <Container className="trainings-home" fixed>
            <List >
                <div className="trainings-home-container">
                    {topTrainings.map((training, index)=>(
                        <div 
                            className="training-home" key={training.id}
                            onClick={()=>history.push(`/Entrainement/${training.id}`)}
                        >
                            <ListItem  
                                className={`training-home ${!loading && 'animate__animated animate__faster animate__slideInUp'}`} 
                                alignItems="flex-start"
                                style={{animationDelay : `${index / 4}s` }}
                            >
                                <ListItemAvatar className="training-home-avatar" >
                                    <Avatar  alt="avatar auteur" src={training.picture} />
                                </ListItemAvatar>
                                <ListItemText
                                    className="training-home-title"
                                    primary={`Top entrainement numéro ${number++}`}
                                    secondary={
                                        <>
                                            <Typography 
                                                className="training-home-name"
                                                component="span"
                                                variant="subtitle2"
                                                color="text.primary"
                                            >
                                                {training.name}
                                            </Typography>
                                            <span className="training-home-text ">
                                                {training.description}
                                            </span>
                                        </>
                                    }
                                />
                            </ListItem>
                            {index < 2 && <Divider variant="inset" component="li" />}
                        </div >
                    ))}
                </div>
            </List>
        </Container> 
    );
}

export default HomeTraining;
