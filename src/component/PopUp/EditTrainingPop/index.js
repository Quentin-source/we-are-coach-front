import { useFormik} from 'formik';
import * as yup from 'yup';


import NavButton from '../../Materials/NavButton/index';
import CustomLevel from '../../Materials/CustomLevel';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField, Button, Grid, Avatar, FormControlLabel, Checkbox, InputLabel, Select, MenuItem, ListItemText } from '@mui/material';
import { AddAPhotoOutlined, ChangeCircleOutlined, Edit, CheckCircleOutline} from "@mui/icons-material";

import './style.scss';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {   FormControl } from '@mui/material';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import './style.scss';


const validationSchema = yup.object().shape({
    name: yup
        .string('Entre le de l\'entrainement')
        .min(2, 'Tape ton nom d\'entrainement')
        .required('Nom de l\'entrainement requis'),
    sport: yup
        .string()
        .required('Requis'),
    description: yup
        .string('Description de l\'entrainement')
        .min(20, 'Tape ta descrition d\'entrainement')
        .required('Description requis'),
    level: yup
        .number('Entre la difficulté de l\'entrainement')
        .required('difficulté requise'),
});

let sportId = 0;

const EditTrainingPop = () => {

    const dispatch = useDispatch();
    const editTrainingPopState = useSelector((state) => (state.training.editTrainingPop));
    const isLoadedPicture = useSelector((state) => (state.training.isLoadedPicture));
    const picturePreview = useSelector((state)=>state.training.picturePreview);
    
    const sports = useSelector((state)=> state.data.sports)
    
    
    const name = useSelector((state)=> state.training.name);
    const sport = useSelector((state)=> state.training.sportId);
    const description = useSelector((state)=> state.training.description);
    const level = useSelector((state)=> state.training.level);
    const id = useSelector((state)=> state.training.id);
    const picture = useSelector((state)=>state.training.picture);

    const handleClose = () => {
        dispatch({type: 'TOGGLE_EDIT_TRAINING'});
        dispatch({
            type :'UPLOAD_USER_PICTURE',
            file: picture,
        });
        formik.resetForm();
    };

    const handleUploadFile = (event) => {
        const picture = event.target.files[0];
        const localPicturePreview = window.URL.createObjectURL(picture);
        dispatch({
            type :'UPLOAD_TRAINING_PICTURE',
            file: localPicturePreview,
        });
    };
    
    const handleClickSport = (event, id) => {
        sportId = id;
        
    }

    const formik = useFormik({
        initialValues : {
            name: name,
            sport: sport,
            description: description,
            level: level,
        },
        validationSchema,
        onSubmit: (values) => {
            dispatch({
                type:'ASK_MODIFY_TRAINING',
                trainingDatas: values,
                id: id,
                sportId : sportId,
                picture : picturePreview,
            })
        },
        enableReinitialize : true,

    });

    useEffect( ()=>{
        formik.resetForm();
    },[]);
    
    return (
        <Dialog className="training-edit-pop" color="primary" open={editTrainingPopState} onClose={handleClose}>
            <DialogTitle className="training-edit-title"> Modification de l'entrainement</DialogTitle>
            <DialogContent className="training-edit-content">
                {window.innerWidth > 500 &&
                    <DialogContentText>
                        renseigner les informations à modifier...
                    </DialogContentText>}
                <Grid className="training-edit-header" align='center'>
                    <div className="training-edit-header-avatar">
                        <img alt="Nom Prénom"
                            src={picturePreview}
                        />
                        <label 
                            className={!isLoadedPicture ? 'navbar-button training-edit-header-avatar-button': 'training-edit-header-avatar-button navbar-button navbar-button--open'} 
                        >
                            {isLoadedPicture ? <ChangeCircleOutlined /> : <AddAPhotoOutlined />}
                            <input name="picture" type="file" onChange={handleUploadFile} />
                        </label>
                    </div>
                </Grid> 

                <form className="training-edit-form" onSubmit={formik.handleSubmit}>

                    <TextField 
                        className="training-edit-form-input"
                        fullWidth
                        variant="standard"
                        id="name"
                        name="name"
                        label="Nom de l'entrainement"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.name && Boolean(formik.errors.name)}
                        helperText={formik.touched.name && formik.errors.name}
                    />
                    {/* <FormControl variant="standard" >
                        <InputLabel id="demo-simple-select-standard-label">Catégorie</InputLabel>
                        <Select
                            name="category"
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={formik.values.category}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.category && Boolean(formik.errors.category)}
                            helperText={formik.touched.category && formik.errors.category}
                            label="Catégorie"
                        >
                            <MenuItem name="category" value="">
                                <em>None</em>
                            </MenuItem>
                            {categories.map((category)=>(
                                <MenuItem 
                                    name="category"
                                    key={category.id}
                                    value={category.id}
                                >
                                    {category.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl> */}

                    <FormControl 
                        variant="standard"
                        fullWidth
                    >
                        <InputLabel id="sports-list">Sport</InputLabel>
                        <Select
                            className="training-edit-form-select"
                            name="sport"
                            labelId="sports-list"
                            id="sports-list"
                            value={formik.values.sport}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.sport && Boolean(formik.errors.sport)}
                            label="Sport"
                        >
                            <MenuItem name="category" value={0}>
                                <em>None</em>
                            </MenuItem>
                            {sports.map((sport)=>( 
                                <MenuItem 
                                    name="sport" 
                                    value={sport.id}
                                    onClick={(event)=> handleClickSport(event, sport.id)}
                                    key={sport.name}
                                >
                                    {sport.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <TextField
                        className="training-edit-form-multi"
                        fullWidth
                        id="outlined-multiline-static"
                        label="Description"
                        name="description"
                        value={formik.values.description}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.description && Boolean(formik.errors.description)}
                        helperText={formik.touched.description && formik.errors.description}
                        multiline
                        rows={(window.innerWidth > 500 && 5) ||(window.innerWidth < 500 && 3)}
                    />



                    <FormControl 
                        fullWidth
                        variant="standard"  
                    >
                        <InputLabel id="demo-simple-select-standard-label">Niveau</InputLabel>
                        <Select
                            className="training-edit-form-select"
                            fullWidth
                            name="level"
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={formik.values.level}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            label="Entre la difficulté de l\'entrainement"
                            error={formik.touched.level && Boolean(formik.errors.level)}
                        >   
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem name="level" value={1}><CustomLevel level={1}/></MenuItem>
                            <MenuItem name="level" value={2}><CustomLevel level={2}/></MenuItem>
                            <MenuItem name="level" value={3}><CustomLevel level={3}/></MenuItem>
                            <MenuItem name="level" value={4}><CustomLevel level={4}/></MenuItem>
                            <MenuItem name="level" value={5}><CustomLevel level={5}/></MenuItem>

                        </Select>
                    </FormControl>
                    
                    <DialogActions>
                        <Button onClick={handleClose}>Annuler</Button>
                        <Button color="primary" type="submit" variant="contained">Confirmer</Button>
                        
                    </DialogActions>
                </form>
            </DialogContent>
                
        </Dialog>
    );
};

export default EditTrainingPop;

