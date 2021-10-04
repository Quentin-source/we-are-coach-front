import { useFormik} from 'formik';
import * as yup from 'yup';

import { useDispatch } from 'react-redux';





import { TextField, Button, Typography } from '@mui/material';


import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';

import './style.scss';
import ButtonFile from './Button/buttonFile';




const validationSchema = yup.object().shape({
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

    const dispatch = useDispatch();

    const initialValues = {
        trainingName: '',
        sportName: '',
        description: '',
        catégorie: '',
        level: ''
    }

    const formik = useFormik({
        initialValues,
        validationSchema: validationSchema,
        onSubmit: (formValues) => {
            console.log(formValues);
            //ca doit etre ok
            dispatch ({
                type: 'ASK_CREATTRAINING', // a la soumission on demande un dispatch nickel
                values: formValues, // ici on recupere les valeur sous forme d'objet nickel
            });
            
        },
    });
    //console.log(formik.values);

    return (
        <main className="main-content main-content-home">
          
            <Typography variant="h6" gutterBottom component="div">
            Création d'un entrainement
            </Typography>

            <form className="form" onSubmit={formik.handleSubmit}>

                <ButtonFile />

                <TextField 
                    variant="standard"
                    id="name"
                    name="trainingName"
                    label="Nom de l'entrainement"
                    value={formik.values.trainingName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
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
                    onBlur={formik.handleBlur}
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

export default Form;