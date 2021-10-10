import { useFormik} from 'formik';
import * as yup from 'yup';

import { useDispatch, useSelector } from 'react-redux';

import NavButton from '../../Materials/NavButton/index';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField, Button, Grid, Avatar, FormControlLabel, Checkbox, InputLabel, Select, MenuItem, ListItemText } from '@mui/material';
import { AddAPhotoOutlined, ChangeCircleOutlined, Edit, CheckCircleOutline} from "@mui/icons-material";

import './style.scss';
import { useEffect } from 'react';



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
        .min(8, '8 caractères min'),
    confirmPassword: yup
        .string('Confirme ton mot de passe')
        .oneOf([yup.ref('password')],'Les mots de passe ne concordent pas'),
    sports: yup
        .array()
        .max(3, '3 sports maximum')
        .min(1,'1 sport minimun')
        .required('Un sport préféré est requis'),
});

const EditUserPop = ({user}) => {

    const dispatch = useDispatch();
    const editUserPopState = useSelector((state) => (state.user.editUserPop));
    const isLoadedPicture = useSelector((state) => (state.user.isLoadedPicture));
    const databasePicture = useSelector((state) => state.user.picture);
    const userStatePicture = useSelector((state)=>state.user.user.picture);
    const sports = useSelector((state)=> state.data.sports)

    const handleClickOpen = () => {
        dispatch({type : 'TOGGLE_EDIT_USER'});
    };

    const handleClose = () => {
        dispatch({type: 'TOGGLE_EDIT_USER'});
        dispatch({
            type :'UPLOAD_USER_PICTURE',
            file: databasePicture,
        });
        formik.resetForm();
    };

    const handleUploadFile = (event) => {
        const picture = event.target.files[0];
        const localPicturePreview = window.URL.createObjectURL(picture);
        dispatch({
            type :'UPLOAD_USER_PICTURE',
            file: localPicturePreview,
        });
    };
    
    const formik = useFormik({
        initialValues: {
            pseudo:user.pseudo,
            email:user.email,
            password: "",
            confirmPassword: "",
            firstName: user.firstname,
            lastName: user.lastname,
            age: user.age,
            city: user.city,
            sports: [user.sport1,user.sport2,user.sport3],
            passwordRequest: false,
            
            
        },
        validationSchema,
        onSubmit: (values) => {
            dispatch({
                type:'ASK_MODIFY_USER',
                userDatas: values,
                id: user.id,
            })
        },
    });

    useEffect(()=> formik.resetForm(),[]);
    
    return (
        <>
            <NavButton 
                className={!editUserPopState ? 'user-profile-button-edit navbar-button': 'user-profile-button-edit navbar-button navbar-button--open'} 
                content={!editUserPopState ? <Edit /> : <CheckCircleOutline /> } 
                handleClick= {handleClickOpen}           
            />
            <Dialog className="navbar-signpop" color="primary" open={editUserPopState} onClose={handleClose}>
                <DialogTitle>Modification du compte</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        renseigner les informations à modifier...
                    </DialogContentText>
                    <Grid className="navbar-signpop-header" align='center'>
                        <div className="navbar-signpop-header-avatar">
                            <Avatar  alt="Nom Prénom"
                                src={userStatePicture}
                            />
                            <label 
                                className={!isLoadedPicture ? 'navbar-button navbar-signpop-header-avatar-button': 'navbar-signpop-header-avatar-button navbar-button navbar-button--open'} 
                            >
                                {isLoadedPicture ? <ChangeCircleOutlined /> : <AddAPhotoOutlined />}
                                <input name="picture" type="file" onChange={handleUploadFile} />
                            </label>
                        </div>
                    </Grid> 

                    <form onSubmit={formik.handleSubmit} >
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
                            inputProps={{
                                autoComplete: "off"
                            }}
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
                            {formik.values.passwordRequest && 
                            <TextField 
                                className="navbar-signpop-input"
                                variant="standard"
                                fullWidth
                                disabled={!formik.values.passwordRequest}
                                inputProps={{
                                    autoComplete: "new-password"
                                }}
                                id="password"
                                name="password"
                                label="Mot de Passe"
                                type="password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.password && Boolean(formik.errors.password)}
                                helperText={formik.touched.password && formik.errors.password}
                            />}

                            {formik.values.passwordRequest && 
                            <TextField 
                                className="navbar-signpop-input"
                                variant="standard"
                                fullWidth
                                inputProps={{
                                    autoComplete: "new-password"
                                }}
                                id="confirmPassword"
                                name="confirmPassword"
                                label="Confirmation"
                                type="password"
                                value={formik.values.confirmPassword}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                                helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                            />}

                            <FormControlLabel 
                                control={<Checkbox name="passwordRequest" checked={formik.values.passwordRequest} onChange={formik.handleChange} />}
                                label={!formik.values.passwordRequest && 'Modifier le mot de passe'}
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
                            // helperText={formik.touched.sports && formik.errors.sports}
                            renderValue={(selected) => selected.join(', ')}
                        >
                            {sports.map((sport) => (
                                <MenuItem
                                    name="sports"
                                    key={sport.id}
                                    value={sport.name}
                                    className="navbar-signpop-select-item"
                                >
                                    <Checkbox checked={formik.values.sports.indexOf(sport.name) > -1} />
                                    <ListItemText primary={sport.name} />
                                </MenuItem>
                            ))}
                        </Select>
                      
                        <DialogActions>
                            <Button onClick={handleClose}>Annuler</Button>
                            <Button color="primary" type="submit" variant="contained">Confirmer</Button>
                            
                        </DialogActions>
                    </form>
                </DialogContent>
                   
            </Dialog>
        </>
    );
};

export default EditUserPop;

