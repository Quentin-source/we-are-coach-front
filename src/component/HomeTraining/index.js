//test HomePage Training
import React from 'react';
import {List, ListItem, Divider, ListItemText, ListItemAvatar, Avatar, Typography, Container } from '@mui/material';
import boxe from '../../assets/images/boxe.jpg';
import velo from '../../assets/images/velo.jpg';
import photo from '../../assets/images/pexels-photo.jpg';
import './style.scss';


const HomeTraining = () => {
    return (
        <Container fixed
            
        >
            <div className="container">
                <List sx={{ width: 2000, height: 550, bgcolor: 'background.paper' }}>
                    <div className="incontainer">
                        <ListItem  sx={{ textalign: "center" }} alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar  sx={{ width: 150, height: 150 }} alt="boxeur" src={boxe} />
                            </ListItemAvatar>
                            <ListItemText
                                primary="Top 1 des entraînements"
                                secondary={
                                    <React.Fragment>
                                        <Typography 
                                            sx={{ display: 'inline', fontSize: 24, fontWeight: 'medium'}}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            Jean Tend
                                        </Typography>
                                        <div className="text">{"— Boxe, krav-maga c'est partis, pour gagner des muscles!"}
                                        </div>
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar sx={{ width: 150, height: 150 }} alt="cycliste" src={velo} />
                            </ListItemAvatar>
                            <ListItemText
                                sx={{ display: 'inline', fontSize: 24, fontWeight: 'medium' }}
                                primary="Top 2 des entraînements"
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            sx={{ display: 'inline', fontSize: 24, fontWeight: 'medium', marginleft: 90 }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                        Alex Xandry
                                        </Typography>
                                        <div className="text">{" — Faire du vélo, c'est bon pour le coeur, suivez ma routine!"}</div>
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar sx={{ width: 150, height: 150 }} alt="muscu" src={photo} />
                            </ListItemAvatar>
                            <ListItemText
                                sx={{ display: 'inline', fontSize: 24, fontWeight: 'medium' }}
                                primary="Top 3 des entraînements"
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            sx={{ display: 'inline', fontSize: 24, fontWeight: 'medium' }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                        Sandie Kilos
                                        </Typography>
                                        <div className="text">{' — Mon entraînement va vous faire perdre vos kilos en trop.'}</div>
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                    </div>
                </List>
            </div>
        </Container> 
    );
}

export default HomeTraining;
