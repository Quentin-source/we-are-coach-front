import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useFormik} from 'formik';
import * as yup from 'yup';

import { TextField, Grid, Avatar, Button, Typography, InputLabel, Select, MenuItem, FormControl } from '@mui/material';

import { Edit, CheckCircleOutline } from '@material-ui/icons';
import { AddAPhotoOutlined, ChangeCircleOutlined } from "@mui/icons-material";
import { AssignmentIndOutlined } from '@material-ui/icons';



import NavButton from '../Materials/NavButton';
import CustomLevel from '../Materials/CustomLevel';

import './style.scss';

const validationSchema = yup.object({
    name: yup
        .string('Entre le de l\'entrainement')
        .min(2, 'Tape ton nom d\'entrainement')
        .required('Nom de l\'entrainement requis'),
    sportName: yup
        .string('Entre le nom du sport')
        .min(2, 'Tape le nom du sport')
        .required('Nom du sport requis'),
    description: yup
        .string('Description de l\'entrainement')
        .min(20, 'Tape ta descrition d\'entrainement')
        .required('Description requis'),
    catégorie: yup
        .string('Choisissez une catégorie')
        .min(1, 'Choisissez une catégorie')
        .required('Catégorie requise'),
    level: yup
        .string('Entre la difficulté de l\'entrainement')
        .required('difficulté requise'),
    date: yup
        .string('Date de création')
        .min(10, 'Entrer une date de type ##/##/####')
        .required('Date requise'),
});



const TrainingDetails = () => {
    const dispatch = useDispatch();
    const { slug } = useParams();
    const editState = useSelector((state)=>(state.training.editState));
    const content = useSelector((state)=>(state.training.content));
    const isLoadedPicture = useSelector((state) => (state.training.isLoadedPicture));

    useEffect(()=>{
        dispatch({type:'LOADING_ON'});
        dispatch({
            type:'FETCH_TRAINING_DETAILS',
            slug: slug,    
        }); 
    },[]);
    
    const formik = useFormik({
        initialValues: {
            name: content.name,
            sportName: '',
            description: content.description,
            catégorie: '',
            level: content.level,
        },
        validationSchema: validationSchema,
    });

    const handleEdit = (event, target) => {
        dispatch({
            type:'TOGGLE_EDIT',
            target: target,
            value: content[target],
        })
    };

    const handleChange = (event, target) => {
        dispatch({
            type : 'MODIFY_INPUT_TRAINING',
            target : target,
            value : event.target.value,
        })

    }

    const handleUploadFile = (event) => {
        const picturePreview = event.target.files[0];
        const localPicturePreview = window.URL.createObjectURL(picturePreview);
        // dispatch({
        //     type :'UPLOAD_PICTURE_PREVIEW',
        //     file: localPicturePreview,
        // });
    };

    
    return (
        <main className="main-content main-content-home">
            

            <div className="training-details-picture">
                <img 
                    src={content.picture}
                    alt="illustration de l"
                />
                <label 
                    className={!isLoadedPicture ? 'navbar-button training-picture-button': 'training-picture-button navbar-button navbar-button--open'} 
                >
                    {isLoadedPicture ? <ChangeCircleOutlined /> : <AddAPhotoOutlined />}
                    <input name="picture" type="file" onChange={handleUploadFile} />
                </label>
            </div>
            
            
            {/* <form className="" onSubmit={formik.handleSubmit}> */}
                
            <div className="training-details-input-group">
                {!editState.name ? 
                    <h2 className='training-name'>
                        {content.name}
                    </h2>
                    :
                    <TextField 
                        variant="standard"
                        id="name"
                        name="trainingName"
                        label="Nom de l'entrainement"
                        value={content.name}
                        onChange={ (event) => {
                            handleChange(event, 'name');
                            formik.handleChange(event);
                        }}
                        onBlur={(event) => {
                            formik.handleBlur(event);
                            handleEdit(event, 'name', 'editName');
                        }}
                        error={formik.touched.trainingName && Boolean(formik.errors.trainingName)}
                        helperText={formik.touched.trainingName && formik.errors.trainingName}
                        
                    />}
                <NavButton  
                    content={editState.name ? 
                        <CheckCircleOutline /> 
                        : 
                        <Edit />
                    } 
                    handleClick={(event) => handleEdit(event, 'name', 'editName')}
                    className={!editState.name ? 'navbar-button': 'navbar-button navbar-button--open'}
                />
            </div >
            <div className="training-details-input-group">
                <FormControl 
                    variant="standard"    
                >
                    <InputLabel id="demo-simple-select-standard-label">Catégorie</InputLabel>
                    <Select
                        name="catégorie"
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={formik.values.catégorie}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.catégorie && Boolean(formik.errors.catégorie)}
                        label="Catégorie"
                    >
                        <MenuItem name="catégorie" value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem name="catégorie" value={1}>catégorie 1</MenuItem>
                        <MenuItem name="catégorie" value={2}>catégorie 2</MenuItem>
                        <MenuItem name="catégorie" value={3}>catégorie 3</MenuItem>
                    </Select>
                </FormControl>

                <FormControl 
                    variant="standard" 
                >
                    <InputLabel id="demo-simple-select-standard-label">Catégorie</InputLabel>
                    <Select
                        name="catégorie"
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={formik.values.catégorie}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.catégorie && Boolean(formik.errors.catégorie)}
                        label="Catégorie"
                    >
                        <MenuItem name="catégorie" value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem name="catégorie" value={1}>catégorie 1</MenuItem>
                        <MenuItem name="catégorie" value={2}>catégorie 2</MenuItem>
                        <MenuItem name="catégorie" value={3}>catégorie 3</MenuItem>
                    </Select>
                </FormControl>
            
            </div>
            
            <div className="training-details-input-group">
                {!editState.description ? 
                    <p>
                        {content.description}
                    </p>
                    :
                    <TextField
                        id="outlined-multiline-static"
                        label="Description"
                        name="description"
                        value={content.description}
                        onChange={ (event) => {
                            handleChange(event, 'description');
                            formik.handleChange(event);
                        }}
                        onBlur={(event) => {
                            formik.handleBlur(event);
                            handleEdit(event, 'description');
                        }}
                        error={formik.touched.description && Boolean(formik.errors.description)}
                        helperText={formik.touched.description && formik.errors.description}
                        multiline
                        rows={8}

                    />}
                <NavButton  
                    content={editState.description ? 
                        <CheckCircleOutline /> 
                        : 
                        <Edit />
                    } 
                    handleClick={(event) => handleEdit(event, 'description')}
                    className={!editState.description ? 'navbar-button': 'navbar-button navbar-button--open'}
                />
            </div>

            
            <div className="training-details-input-group">
                {!editState.level ? 
                    <Typography variant="h5">
                        <CustomLevel level={content.level} />
                    </Typography>
                    :
                    <FormControl 
                        variant="standard" 
                    >
                        <InputLabel id="demo-simple-select-standard-label">Niveau</InputLabel>
                        <Select
                            name="level"
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={formik.values.level}
                            onChange={ (event) => {
                                handleChange(event, 'level');
                                formik.handleChange(event);
                            }}
                            onBlur={(event) => {
                                formik.handleBlur(event);
                                handleEdit(event, 'level');
                            }}
                            label="Entre la difficulté de l'entrainement"
                            error={formik.touched.level && Boolean(formik.errors.level)}
                        >   
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem name="level" value={1}><CustomLevel level={1} /></MenuItem>
                            <MenuItem name="level" value={2}><CustomLevel level={2} /></MenuItem>
                            <MenuItem name="level" value={3}><CustomLevel level={3} /></MenuItem>
                            <MenuItem name="level" value={4}><CustomLevel level={4} /></MenuItem>
                            <MenuItem name="level" value={5}><CustomLevel level={5} /></MenuItem>

                        </Select>
                    </FormControl>}
                <NavButton  
                    content={editState.level ? 
                        <CheckCircleOutline /> 
                        : 
                        <Edit />
                    } 
                    handleClick={(event) => handleEdit(event, 'level')}
                    className={!editState.level ? 'navbar-button': 'navbar-button navbar-button--open'}
                />
            </div >



            <div className = "footer-content">
                <Button 
                    variant="contained" 
                    type="submit" 
                    // endIcon={<BuildCircle />}

                >
                    valider
                </Button> 
            </div>          

        </main >
    )
}

export default TrainingDetails;


