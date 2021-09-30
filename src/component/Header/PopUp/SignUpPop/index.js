import { useFormik} from 'formik';
import * as yup from 'yup';

import { useDispatch, useSelector } from 'react-redux';

import NavButton from '../../NavButton/index';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { TextField, Button, Grid, Avatar, Typography, FormControlLabel, Checkbox } from '@mui/material';



import { AssignmentIndOutlined } from '@material-ui/icons';

import './style.scss';



const validationSchema = yup.object({
    name: yup
        .string('Entre ton nom')
        .min(2, 'Tape ton nom')
        .required('Nom requis'),
    firstname: yup
        .string('Entre ton prénom')
        .min(2, 'Tape ton prénom')
        .required('Prénom requis'),
    email: yup
        .string('Entre ton email')
        .email('Entre un email valide')
        .required('Un email est requis'),
    age: yup
        .string('Entre ton âge')
        .required('Age requis'),
    city: yup
        .string('Entre ta ville')
        .required('Localisation requis'),
    password: yup
        .string('Entre ton mot de passe')
        .min(8, 'Ton mot de passe doit être supérieur à 8 caractères')
        .required('Un mot de passe est requis'),
    confirmPassword: yup
        .string('Confirme ton mot de passe')
        .min(8, 'Ton mot de passe doit être supérieur à 8 caractères')
        .required('Un mot de passe est requis'),
});

const SignUpPop = () => {

    const dispatch = useDispatch();

    const handleClickOpen = () => {
        dispatch({type : 'OPEN_SIGNPOP'});
    };

    const handleClose = () => {
        dispatch({type: 'CLOSE_SIGNPOP'});
    };

    // const handleConnection = () => {
    //     dispatch({type: 'SIGNIN'});
        
    // };

    const signUpPopState = useSelector((state) => (state.home.signUpPop));

    const formik = useFormik({
        initialValues: {
            email: 'foobar@example.com',
            password: 'foobar',
            confirmPassword: 'foobar',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(JSON.stringify(values, null, 2));
        },
    });

    // console.log(mainThemeMUI);

    return (
        <>
            <NavButton 
                className={!signUpPopState ? 'navbar-button': 'navbar-button navbar-button--open'} 
                content={<AssignmentIndOutlined />} 
                handleClick= {handleClickOpen}           
            />
            <Dialog className="navbar-signpop" color="primary" open={signUpPopState} onClose={handleClose}>
                <DialogTitle>Inscription</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Veuillez renseigner les informations suivantes...
                    </DialogContentText>
                    <Grid align='center'>
                        <h2>S'inscrire</h2>
                        <Typography variant='caption' gutterBottom>Créer votre compte</Typography>
                        
                        <Avatar alt="Nom Prénom"
                            src="/static/images/avatar/1.jpg"
                            sx={{ width: 60, height: 60 }}>
                        
                        </Avatar>
                    </Grid>
    
                    <form onSubmit={formik.handleSubmit}>
                        <TextField 
                            fullWidth
                            variant="standard"
                            id="name"
                            name="name"
                            label="Nom"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            error={formik.touched.name && Boolean(formik.errors.name)}
                            helperText={formik.touched.name && formik.errors.name}
                        />
                        <TextField 
                            fullWidth
                            variant="standard"
                            id="firstname"
                            name="firstname"
                            label="Prénom"
                            value={formik.values.firstname}
                            onChange={formik.handleChange}
                            error={formik.touched.firstname && Boolean(formik.errors.firstname)}
                            helperText={formik.touched.firstname && formik.errors.firstname}
                        />
                        <TextField 
                            fullWidth
                            variant="standard"
                            id="age"
                            name="age"
                            label="Age"
                            value={formik.values.age}
                            onChange={formik.handleChange}
                            error={formik.touched.age && Boolean(formik.errors.age)}
                            helperText={formik.touched.age && formik.errors.age}
                        />
                        <TextField 
                            fullWidth
                            variant="standard"
                            id="city"
                            name="city"
                            label="Ville"
                            value={formik.values.city}
                            onChange={formik.handleChange}
                            error={formik.touched.city && Boolean(formik.errors.city)}
                            helperText={formik.touched.city && formik.errors.city}
                        />
                        <TextField 
                            fullWidth
                            variant="standard"
                            id="email"
                            name="email"
                            label="Email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                        />
                        <TextField 
                            variant="standard"
                            fullWidth
                            id="password"
                            name="password"
                            label="Mot de Passe"
                            type="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password}
                        />
                        <TextField 
                            variant="standard"
                            fullWidth
                            id="confirmPassword"
                            name="confirmPassword"
                            label="Confirmation du Mot de Passe"
                            type="confirmPassword"
                            value={formik.values.confirmPassword}
                            onChange={formik.handleChange}
                            error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                            helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                        />
                        <TextField
                            id="outlined-multiline-static"
                            label="Sports Pratiqués"
                            multiline
                            rows={4}
                            defaultValue="Ecris tes sports"
                        />
                        <FormControlLabel 
                            control={<Checkbox defaultChecked />} 
                            name='TermsEtConditions' 
                            label="J'accepte les termes et conditions d'utilisation"
                            type="checkbox"
                        />
                        <DialogActions>
                            <Button onClick={handleClose}>Annuler</Button>
                            <Button color="primary" type="submit">Créer votre compte</Button>
                            <Button color="primary" type="submit">J'ai déjà un compte</Button>
                        </DialogActions>
                    </form>
                </DialogContent>
                   
            </Dialog>
        </>
    );
};


export default SignUpPop;

// 
