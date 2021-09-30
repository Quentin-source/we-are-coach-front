import { Typography, Card, CardContent, Grid, TextField, Button } from '@mui/material';

import './style.scss';

const formContact = () => {

    return (
        <div className="contact">
            <Typography style={{maxWidth:450, margin:"0 auto", padding:"50px 5px"}} gutterBottom variant="h2" align="center">Contact </Typography>

            
            <CardContent style={{maxWidth:450, margin:"0 auto", padding:"20px 5px"}}>
                <Card>
                    <Typography gutterBottom variant="h5">Formulaire de Contact</Typography>
                    <Typography gutterBottom color="textSecondary" variant="body2" component="p">Besoin d'un renseignement ? Remplissez le formulaire ci-dessous et nous vous répondrons dans les meilleurs délais.</Typography>
                    <form>
                        <Grid container spacing={1}>

                            <Grid xs={12} sm ={6} item>
                                <TextField label="Nom" placeholder="Entre ton nom" variant="outlined" color="primary" fullWidth required/>
                            </Grid>
                            <Grid xs={12} sm ={6} item>
                                <TextField label="Prénom" placeholder="Entre ton prénom" variant="outlined" fullWidth required/>
                            </Grid>
                            <Grid xs={12} sm ={6} item>
                                <TextField type="email" label="Email" placeholder="Entre ton Email" variant="outlined" fullWidth required/>
                            </Grid>
                            <Grid xs={12} sm ={6} item>
                                <TextField 
                                    type="number"
                                    label="Téléphone" placeholder="Entre ton numéro de téléphone" variant="outlined" fullWidth required/>
                            </Grid>
                            <Grid xs={12} sm ={18} item>
                                <TextField
                                    label="Votre Message"
                                    placeholder="Description de la demande" 
                                    variant="outlined" 
                                    fullWidth required
                                    multiline
                                    rows={6}
                                />
                            </Grid>
                            <Grid xs={12} item>
                                <Button type="submit" variant="outlined" color="primary" fullWidth> Envoyer</Button>
                            </Grid>
                        </Grid>
                    </form>
                </Card>

            </CardContent>

        </div>

    );
};

export default formContact;