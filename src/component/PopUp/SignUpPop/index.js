import { useFormik} from 'formik';
import * as yup from 'yup';

import { useDispatch, useSelector } from 'react-redux';

import NavButton from '../../Materials/NavButton';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField, Button, Grid, Avatar, FormControlLabel, Checkbox, InputLabel, Select, MenuItem, ListItemText } from '@mui/material';
import { AddAPhotoOutlined, ChangeCircleOutlined } from "@mui/icons-material";
import { AssignmentIndOutlined } from '@material-ui/icons';

import './style.scss';
import { useEffect } from 'react';


const names = [
    'Badminton',
    'FootBall',
    'Rugby',
    'Randonnée',
    'Tennis',
    'Surf',
    'Natation',
    'Basket Ball',
    'Vélo',
    'Karaté',
];



const validationSchema = yup.object({
    pseudo: yup
        .string('Pseudo invalide')
        .min(2, 'Pseudo invalide')
        .required('Requis'),
    firstName: yup
        .string('Prénom invalide')
        .min(2, 'Prénom invalide')
        .required('Requis'),
    lastName: yup
        .string('Nom invalide')
        .min(2,'Nom invalide')
        .required('Requis'),
    email: yup
        .string('Email invalide')
        .email('Email invalide')
        .required('Requis'),
    age: yup
        .number('Age invalide')
        .min(7, 'Désolé tu es trop jeune')
        .max(77,'Désolé vous êtes trop vieux')
        .required('Requis'),
    city: yup
        .string('Ville invalide')
        .min(2, 'Ville invalide')
        .required('Requis'),
    password: yup
        .string('Mot de passe')
        .min(8, '8 caractères min')
        .required('Requis'),
    confirmPassword: yup
        .string('Confirme ton mot de passe')
        .required('Confirme ton mot de passe').oneOf([yup.ref('password')],'Les mots de passe ne concordent pas'),
    sports: yup
        .array()
        .max(3, '3 sports maximum')
        .min(1,'1 sport minimun')
        .required('Un sport préféré est requis'),
    CGU: yup
        .boolean()
        .oneOf([true],'Veuillez valider les CGU'),
});

const SignUpPop = () => {

    const dispatch = useDispatch();
    const signUpPopState = useSelector((state) => (state.home.signUpPop));
    const picturePreview = useSelector((state) => (state.user.picturePreview));
    const isLoadedPicture = useSelector((state) => (state.user.isLoadedPicture));


    const handleClickOpen = () => {
        dispatch({type : 'OPEN_SIGNPOP'});
    };

    const handleClose = () => {
        dispatch({type: 'CLOSE_SIGNPOP'});
        dispatch({
            type :'UPLOAD_IMAGE_OK',
            target : 'user',
            url : '',
            state : false,
        });
        formik.resetForm();
    };

    const handleUploadFile = (event) => {
        dispatch({
            type: 'UPLOAD_IMAGE',
            file : event.target.files[0],
            target: 'user',
        });
    };

   

    const formik = useFormik({
        initialValues: {
            pseudo:"",
            email: "",
            password: "",
            confirmPassword: "",
            firstName: "",
            lastName: "",
            age: "",
            city: "",
            sports: [],
            CGU: false,
            
        },
        validationSchema,
        onSubmit: (values) => {
            dispatch({
                type:'ASK_INSCRIPTION',
                userDatas: values,
                picture: picturePreview,
            })
        },
    });

    useEffect(()=>(
        dispatch({
            type :'UPLOAD_IMAGE_OK',
            target : 'user',
            url : '',
            state : false,
        })
    ),[]);

    return (
        <>
            <NavButton 
                className={!signUpPopState ? 'navbar-button': 'navbar-button navbar-button--open'} 
                content={<AssignmentIndOutlined />} 
                handleClick= {handleClickOpen}           
            />
            <Dialog className="navbar-signpop" color="primary" open={signUpPopState} onClose={handleClose}>
                <DialogTitle>Création d'un compte</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Veuillez renseigner les informations suivantes...
                    </DialogContentText>
                    <Grid className="navbar-signpop-header" align='center'>
                        <div className="navbar-signpop-header-avatar">
                            <Avatar  
                                alt="portrait de l'utilisateur"
                                src={picturePreview}
                            />
                            <label 
                                className={!isLoadedPicture ? 'navbar-button navbar-signpop-header-avatar-button': 'navbar-signpop-header-avatar-button navbar-button navbar-button--open'} 
                            >
                                {isLoadedPicture ? <ChangeCircleOutlined /> : <AddAPhotoOutlined />}
                                <input name="picture" type="file" onChange={handleUploadFile} />
                            </label>
                        </div>
                    </Grid> 

                    <form onSubmit={formik.handleSubmit}>
                        <TextField 
                            className="navbar-signpop-input"
                            fullWidth
                            autoFocus
                            size="normal"
                            variant="standard"
                            id="pseudo"
                            name="pseudo"
                            label="Pseudo"
                            value={formik.values.pseudo}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.pseudo && Boolean(formik.errors.pseudo)}
                            helperText={formik.touched.pseudo && formik.errors.pseudo}
                        />


                        <div className="navbar-signpop-input-group">
                            <TextField 
                                className="navbar-signpop-input"
                                fullWidth
                                size="normal"
                                variant="standard"
                                id="firstName"
                                name="firstName"
                                label="Prénom"
                                value={formik.values.firstName}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                                helperText={formik.touched.firstName && formik.errors.firstName}
                            />
                            <TextField 
                                className="navbar-signpop-input"
                                fullWidth
                                variant="standard"
                                id="lastName"
                                name="lastName"
                                label="Nom"
                                value={formik.values.lastName}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                                helperText={formik.touched.lastName && formik.errors.lastName}
                            />
                        </div>
                        <div className="navbar-signpop-input-group">
                            <TextField 
                                className="navbar-signpop-input"
                                fullWidth
                                variant="standard"
                                id="age"
                                name="age"
                                label="Age"
                                value={formik.values.age}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.age && Boolean(formik.errors.age)}
                                helperText={formik.touched.age && formik.errors.age}
                            />
                            <TextField 
                                className="navbar-signpop-input"
                                fullWidth
                                variant="standard"
                                id="city"
                                name="city"
                                label="Ville"
                                value={formik.values.city}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.city && Boolean(formik.errors.city)}
                                helperText={formik.touched.city && formik.errors.city}
                            />
                        </div>
                        <TextField 
                            className="navbar-signpop-input"
                            fullWidth
                            variant="standard"
                            id="email"
                            name="email"
                            label="Email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                        />

                        <div className="navbar-signpop-input-group">
                            <TextField 
                                className="navbar-signpop-input"
                                variant="standard"
                                fullWidth
                                id="password"
                                name="password"
                                label="Mot de Passe"
                                type="password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.password && Boolean(formik.errors.password)}
                                helperText={formik.touched.password && formik.errors.password}
                            />
                            <TextField 
                                className="navbar-signpop-input"
                                variant="standard"
                                fullWidth
                                id="confirmPassword"
                                name="confirmPassword"
                                label="Confirmation"
                                type="password"
                                value={formik.values.confirmPassword}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                                helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                            />
                        </div>    
                        <InputLabel className="navbar-signpop-select" id="sports">Sports préférés</InputLabel>
                        <Select
                            className="navbar-signpop-select"
                            labelId="sports"
                            fullWidth
                            name="sports"
                            multiple
                            value={formik.values.sports}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.sports && Boolean(formik.errors.sports)}
                            helperText={formik.touched.sports && formik.errors.sports}
                            renderValue={(selected) => selected.join(', ')}
                        >
                            {names.map((name) => (
                                <MenuItem
                                    name="sports"
                                    key={name}
                                    value={name}
                                    className="navbar-signpop-select-item"
                                >
                                    <Checkbox checked={formik.values.sports.indexOf(name) > -1} />
                                    <ListItemText primary={name} />
                                </MenuItem>
                            ))}
                        </Select>
                      
                        <FormControlLabel 
                            className="navbar-signpop-select-item"
                            control={<Checkbox
                                name='CGU'
                                checked={formik.values.CGU}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />}
                            name='TermsEtConditions' 
                            label="J'accepte les termes et conditions d'utilisation"
                            error={formik.touched.CGU && Boolean(formik.errors.CGU)}
                            helperText={formik.touched.CGU && formik.errors.CGU}
                            type="checkbox"
                        />
                        <DialogActions>
                            <Button onClick={handleClose}>Annuler</Button>
                            <Button color="primary" type="submit" variant="contained">Inscription</Button>
                            
                        </DialogActions>
                    </form>
                </DialogContent>
                   
            </Dialog>
        </>
    );
};

export default SignUpPop;

