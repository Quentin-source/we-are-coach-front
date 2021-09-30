import { useDispatch, useSelector } from 'react-redux';

import NavButton from '../../NavButton'

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

// import Checkbox from '@mui/material/Checkbox';
import { Grid, Avatar, Typography, TextField, Button, FormControlLabel } from '@material-ui/core';

// import { Formik, ErrorMessage } from 'formik';
import { useFormik } from 'formik';

import * as Yup from 'yup';

import './style.scss';


import { AssignmentIndOutlined } from '@material-ui/icons';

import './style.scss'

const SignUppop = () =>  {
    const dispatch = useDispatch();

    const handleClickOpen = () => {
        dispatch({type : 'OPEN_SIGNPOP'});
    };

    const handleClose = () => {
        dispatch({type: 'CLOSE_SIGNPOP'});
    };

    const handleConnection = () => {
        dispatch({type: 'SIGNIN'});
        
    };

    const signUpPopState = useSelector((state) => (state.home.signUpPop));    

    const validationSchema = Yup.object().shape({
        NomPrenom: Yup.string().min(5, "C'est trop court!").required('Required'),
        Âge: Yup.string().min(17, "Trop jeune pour t'inscrire!").max(80, "Trop vieux pour t'inscrire!").required('Required'),
        Email: Yup.string().email('Entre un mail valide').required('Required'),

    })

   
    const formik = useFormik({
        initialValues: {
            email : ''
        },
        validationSchema: validationSchema,
        onSubmit: (values, actions, event) => {
            event.preventDefault();
            console.log(values, actions);
            
            
            alert(JSON.stringify(values, null, 2));
        },
    });

    const headerStyle={margin:0};

    


    return (
        <div>
            <NavButton 
                className={!signUpPopState ? 'navbar-button': 'navbar-button navbar-button--open'} 
                content={<AssignmentIndOutlined />} 
                handleClick= {handleClickOpen}           
            />
            <Dialog className="navbar-signpop" color="primary" open={signUpPopState} onClose={handleClose}>
                <form onSubmit={formik.onSubmit}>
                    <DialogTitle>Inscription</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                    Veuillez renseigner les informations suivantes...
                        </DialogContentText>
                        <Grid align='center'>
                            <h2 style={headerStyle}>S'inscrire</h2>
                            <Typography variant='caption' gutterBottom>Créer votre compte</Typography>
                            
                            <Avatar alt="Nom Prénom"
                                src="/static/images/avatar/1.jpg"
                                sx={{ width: 60, height: 60 }}>
                            
                            </Avatar>
                        </Grid>
                        
                        <TextField
                            fullWidth
                            id="email"
                            name="email"
                            label="Email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                        />
                            {/* <TextField  fullWidth name='Âge' label='Votre Âge' placeholder='Entre ton âge'
                                helperText={<ErrorMessage name='Âge' />}/>
                            <TextField  fullWidth name='Email' label='Votre Email' placeholder='Entre ton adresse mail'
                                helperText={<ErrorMessage name='Email' />}  />
                            <TextField  fullWidth name='Ville' label='Votre Ville' />
                            <TextField  fullWidth name='MotDePasse' label='Mot de Passe' />
                            <TextField  fullWidth name='ConfirmeMotDePasse' label='Confirmer Mot de Passe' />
                            <FormControlLabel control={<TextField as={Checkbox} defaultChecked />} name='TermsEtConditions' label="J'accepte les termes et conditions d'utilisation" /> */}
                            
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Annuler</Button>
                        <Button type="submit" onClick={handleConnection}>Connection</Button>
                        

                    </DialogActions>
                </form>
            </Dialog>
        </div>
    );
}

export default SignUppop;


