//test HomePage Training
import {List, ListItem, Divider, ListItemText, ListItemAvatar, Avatar, Typography, Container } from '@mui/material';
import { useSelector } from 'react-redux';

import './style.scss';


const HomeTraining = () => {

    const topTrainings = useSelector((state)=>(state.home.bestWorkout));
    let number = 1;
    return (
        <Container className="trainings-home" fixed>
            <List >
                <div className="trainings-home-container">
                    {topTrainings.map((training, index)=>(
                        <div className="training-home" key={training.id}>
                            <ListItem  className="training-home" alignItems="flex-start">
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
                                            <span className="training-home-text">
                                                {/* {training.description} */}
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
