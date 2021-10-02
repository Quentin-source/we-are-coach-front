import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useParams } from 'react-router-dom';


import { useFormik} from 'formik';
import * as yup from 'yup';

import { Typography } from '@mui/material';
import { TextField, Button } from '@mui/material';


import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';

import { Edit, CheckCircleOutline } from '@material-ui/icons';


import NavButton from '../Materials/NavButton';

import './style.scss';

const validationSchema = yup.object({
    trainingName: yup
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
    const editName = useSelector((state)=>(state.training.editName));
    const content = useSelector((state)=>(state.training.content))
    useEffect(()=>{
        dispatch({type:'LOADING_ON'});
        dispatch({
            type:'FETCH_TRAINING_DETAILS',
            slug: slug,    
        }); 
    },[]);
    
    const formik = useFormik({
        initialValues: {
            trainingName: '',
            sportName: '',
            description: '',
            catégorie: '',
            level: ''
        },
        validationSchema: validationSchema,
    });

    const handleEdit = (event) => {
        const target = event.currentTarget.dataset.target;
        const toggle = event.currentTarget.dataset.toggle;
        dispatch({
            type:'TOGGLE_EDIT',
            toggle: toggle,
            target: target,
            value: content[target],
        })
    };

    const handleChange = (event) => {
        console.log(event.target.dataset.target);        
        dispatch({
            type : 'MODIFY_INPUT_TRAINING',
            target : event.target.dataset.target,
            value : event.target.value,
        })

    }

    
    return (
        <main className="main-content main-content-home">
            
            
            <form className="form" onSubmit={formik.handleSubmit}>
                
                <div className="training-details-input-group">
                    {!editName ? 
                        <Typography variant="h5">
                            {content.name}
                        </Typography>
                        :
                        <TextField 
                            variant="standard"
                            id="name"
                            name="trainingName"
                            label="Nom de l'entrainement"
                            value={content.name}
                            inputProps={{'data-target': 'name'}}
                            onChange={handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.trainingName && Boolean(formik.errors.trainingName)}
                            helperText={formik.touched.trainingName && formik.errors.trainingName}
                            sx={{
                                width: 800,
                                maxWidth: '100%',
                                m: 2
                            }}
                        />}
                    <NavButton  
                        content={editName ? 
                            <CheckCircleOutline /> 
                            : 
                            <Edit />
                        } 
                        handleClick={handleEdit}
                        dataTarget='name'
                        dataToggle='editName'
                        className={!editName ? 'navbar-button': 'navbar-button navbar-button--open'}
                    />
                </div >

                <FormControl 
                    variant="standard" 
                    sx={{
                        width: 800,
                        maxWidth: '100%',
                        m: 2 
                    }}>
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
                    sx={{
                        width: 800,
                        maxWidth: '100%',
                        m: 2 
                    }}>
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

                <TextField
                    id="outlined-multiline-static"
                    label="Description"
                    name="description"
                    value={formik.values.description}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.description && Boolean(formik.errors.description)}
                    helperText={formik.touched.description && formik.errors.description}
                    multiline
                    rows={8}
                    sx={{
                        width: 800,
                        maxWidth: '100%',
                        m: 2
                    }}
                />

                

                <FormControl 
                    variant="standard" 
                    sx={{
                        width: 800,
                        maxWidth: '100%',
                        m: 2 
                    }}>
                    <InputLabel id="demo-simple-select-standard-label">Niveau</InputLabel>
                    <Select
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
                        <MenuItem name="level" value={10}>Facile</MenuItem>
                        <MenuItem name="level" value={20}>Moyen</MenuItem>
                        <MenuItem name="level" value={30}>Armageddon</MenuItem>
                    </Select>
                </FormControl>

                <div className = "footer-content">
                    <Button 
                        variant="contained" 
                        type="submit" 
                        endIcon={<BuildCircleIcon />}
                        sx={{ m: 2 }}
                    >
                        valider
                    </Button> 
                </div>          
            </form>
        </main >
    )
}

export default TrainingDetails;


