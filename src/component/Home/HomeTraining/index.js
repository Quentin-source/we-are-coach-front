//test HomePage Training
import {List, ListItem, Divider, ListItemText, ListItemAvatar, Avatar, Typography, Container } from '@mui/material';

import './style.scss';


const HomeTraining = () => {
    return (
        <Container className="trainings-home" fixed>
            <List >
                <div className="trainings-home-container">
                    <ListItem  className="training-home" alignItems="flex-start">
                        <ListItemAvatar className="training-home-avatar" >
                            <Avatar  alt="boxeur" src={"http://localhost/apo/projet-workout-plan-front/src/assets/images/boxe.jpg"} />
                        </ListItemAvatar>
                        <ListItemText
                            className="training-home-title"
                            primary="Top 1 des entraînements"
                            secondary={
                                <>
                                    <Typography 
                                        className="training-home-name"
                                        component="span"
                                        variant="subtitle2"
                                        color="text.primary"
                                    >
                                        Jean Tend
                                    </Typography>
                                    <span className="training-home-text">
                                        Boxe, krav-maga c'est partis, pour gagner des muscles!
                                    </span>
                                </>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem  className="training-home" alignItems="flex-start">
                        <ListItemAvatar className="training-home-avatar">
                            <Avatar alt="boxeur" src={"http://localhost/apo/projet-workout-plan-front/src/assets/images/velo.jpg"} />
                        </ListItemAvatar>
                        <ListItemText
                            className="training-home-title"
                            primary="Top 2 des entraînements"
                            secondary={
                                <>
                                    <Typography 
                                        className="training-home-name"
                                        component="span"
                                        variant="subtitle2"
                                        color="text.primary"
                                    >
                                        Alex Xandry
                                    </Typography>
                                    <span className="training-home-text"> 
                                        Faire du vélo, c'est bon pour le coeur, suivez ma routine!
                                    </span>
                                </>
                            }
                        />
                    </ListItem>
                    
                    <Divider variant="inset" component="li" />

                    <ListItem  className="training-home" alignItems="flex-start">
                        <ListItemAvatar className="training-home-avatar" >
                            <Avatar alt="photo" src={"http://localhost/apo/projet-workout-plan-front/src/assets/images/pexels-photo.jpg"} />
                        </ListItemAvatar>
                        <ListItemText
                            className="training-home-title"
                            primary="Top 3 des entraînements"
                            secondary={
                                <>
                                    <Typography 
                                        className="training-home-name"
                                        component="span"
                                        variant="subtitle2"
                                        color="text.primary"
                                    >
                                        Alex Xandry
                                    </Typography>
                                    <span className="training-home-text"> 
                                        Mon entraînement va vous faire perdre vos kilos en trop.
                                    </span>
                                </>
                            }
                        />
                    </ListItem>

                </div>
            </List>
        </Container> 
    );
}

export default HomeTraining;
