import { useFormik} from 'formik';
import * as yup from 'yup';

import { useDispatch, useSelector } from 'react-redux';

import run from '../../../assets/images/run.jpg'
import pool from '../../../assets/images/pool.jpg'
import tennis from '../../../assets/images/tennis.jpg'



import { TextField, Button, Typography } from '@mui/material';


import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';

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



const Form = () => {

    const formik = useFormik({
        initialValues: {
            trainingName: '',
            sportName: '',
            description: '',
            catégorie: '',
            level: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    console.log(formik.initialValues.trainingName);

    return (
        <>
  
            <Typography variant="h6" gutterBottom component="div">
            Création d'un entrainement
            </Typography>

            <form className="form" onSubmit={formik.handleSubmit}>
                
                <TextField 
                    variant="standard"
                    id="name"
                    name="trainingName"
                    label="Nom de l'entrainement"
                    value={formik.values.trainingName}
                    onChange={formik.handleChange}
                    error={formik.touched.trainingName && Boolean(formik.errors.trainingName)}
                    helperText={formik.touched.trainingName && formik.errors.trainingName}
                    sx={{
                        width: 800,
                        maxWidth: '100%',
                        m: 2
                    }}
                />
                <TextField 
                    variant="standard"
                    id="name"
                    name="sportName"
                    label="Nom du sport"
                    value={formik.values.sportName}
                    onChange={formik.handleChange}
                    error={formik.touched.sportName && Boolean(formik.errors.sportName)}
                    helperText={formik.touched.sportName && formik.errors.sportName}
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
                    <InputLabel id="demo-simple-select-standard-label">Catégorie</InputLabel>
                    <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={formik.values.catégorie}
                        onChange={formik.handleChange}
                        error={formik.touched.catégorie && Boolean(formik.errors.catégorie)}
                        label="Catégorie"
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={1}>catégorie 1</MenuItem>
                        <MenuItem value={2}>catégorie 2</MenuItem>
                        <MenuItem value={3}>catégorie 3</MenuItem>
                    </Select>
                </FormControl>

                <TextField
                    id="outlined-multiline-static"
                    label="Description"
                    name="description"
                    value={formik.values.description}
                    onChange={formik.handleChange}
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
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={formik.values.level}
                        onChange={formik.handleChange}
                        label="Entre la difficulté de l\'entrainement"
                        error={formik.touched.level && Boolean(formik.errors.level)}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Facile</MenuItem>
                        <MenuItem value={20}>Moyen</MenuItem>
                        <MenuItem value={30}>Armageddon</MenuItem>
                    </Select>
                </FormControl>

                <TextField
                    id="standard-basic"
                    name="date"
                    label="Date"
                    value={formik.values.date}
                    onChange={formik.handleChange}
                    variant="standard" 
                    error={formik.touched.date && Boolean(formik.errors.date)}
                    helperText={formik.touched.age && formik.errors.age}
                    sx={{
                        width: 800,
                        maxWidth: '100%',
                        m: 2 
                    }}
                />

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
                
             
        </>
    )
}

export default Form;