//test HomePage Training
import {List, ListItem, Divider, ListItemText, ListItemAvatar, Avatar, Typography, Container } from '@mui/material';
import { useSelector } from 'react-redux';

import './style.scss';


const HomeTraining = () => {

    const topTrainings = useSelector((state)=>(state.training.best));
    return (
        <Container className="trainings-home" fixed>
            <List >
                <div className="trainings-home-container">
                    {topTrainings.map((training)=>(
                        <>
                            <ListItem  className="training-home" alignItems="flex-start">
                                <ListItemAvatar className="training-home-avatar" >
                                    <Avatar  alt="avatar auteur" src={"http://localhost/apo/projet-workout-plan-front/src/assets/images/avatar_Maeva.jpg"} />
                                </ListItemAvatar>
                                <ListItemText
                                    className="training-home-title"
                                    primary={training.name}
                                    secondary={
                                        <>
                                            <Typography 
                                                className="training-home-name"
                                                component="span"
                                                variant="subtitle2"
                                                color="text.primary"
                                            >
                                            Maeva O'clock
                                            </Typography>
                                            <span className="training-home-text">
                                                {training.description}
                                            </span>
                                        </>
                                    }
                                />
                            </ListItem>
                            <Divider variant="inset" component="li" />
                        </>
                    ))}

                
                    
                    

                </div>
            </List>
        </Container> 
    );
}

export default HomeTraining;
