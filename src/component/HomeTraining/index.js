//test HomePage Training
import {List, ListItem, Divider, ListItemText, ListItemAvatar, Avatar, Typography, Container } from '@mui/material';
import boxe from '../../assets/images/boxe.jpg';
import velo from '../../assets/images/velo.jpg';
import photo from '../../assets/images/pexels-photo.jpg';
import './style.scss';


const HomeTraining = () => {
    return (
        <Container className="trainings-home" fixed>
            <List >
                <div className="trainings-home-container">
                    <ListItem  className="training-home" alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar  className="training-home-avatar" alt="boxeur" src={boxe} />
                        </ListItemAvatar>
                        <ListItemText
                            className="training-home-title"
                            primary="Top 1 des entraînements"
                            secondary={
                                <>
                                    <Typography 
                                        className="traing-home-name"
                                        component="span"
                                        variant="subtitle2"
                                        color="text.primary"
                                    >
                                        Jean Tend
                                    </Typography>
                                    <div className="training-home-text">
                                        Boxe, krav-maga c'est partis, pour gagner des muscles!
                                    </div>
                                </>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem  className="training-home" alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar  className="training-home-avatar" alt="boxeur" src={velo} />
                        </ListItemAvatar>
                        <ListItemText
                            className="training-home-title"
                            primary="Top 2 des entraînements"
                            secondary={
                                <>
                                    <Typography 
                                        className="traing-home-name"
                                        component="span"
                                        variant="subtitle2"
                                        color="text.primary"
                                    >
                                        Alex Xandry
                                    </Typography>
                                    <div className="training-home-text"> 
                                        Faire du vélo, c'est bon pour le coeur, suivez ma routine!
                                    </div>
                                </>
                            }
                        />
                    </ListItem>
                    
                    <Divider variant="inset" component="li" />

                    <ListItem  className="training-home" alignItems="flex-start">
                        <ListItemAvatar sx={{ width : 60, height: 60 }} className="training-home-avatar">
                            <Avatar   alt="boxeur" src={photo} />
                        </ListItemAvatar>
                        <ListItemText
                            className="training-home-title"
                            primary="Top 3 des entraînements"
                            secondary={
                                <>
                                    <Typography 
                                        className="traing-home-name"
                                        component="span"
                                        variant="subtitle2"
                                        color="text.primary"
                                    >
                                        Alex Xandry
                                    </Typography>
                                    <div className="training-home-text"> 
                                        Mon entraînement va vous faire perdre vos kilos en trop.
                                    </div>
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
