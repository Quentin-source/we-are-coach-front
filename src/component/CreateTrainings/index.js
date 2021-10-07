import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik} from 'formik';
import * as yup from 'yup';

import { TextField, Button, Avatar, Typography, FormControl, InputLabel, Select, MenuItem,} from '@mui/material';
import { AddAPhotoOutlined, ChangeCircleOutlined } from "@mui/icons-material";
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import './style.scss';

import CustomLevel from '../Materials/CustomLevel'

const validationSchema = yup.object().shape({
    name: yup
        .string('Entre le de l\'entrainement')
        .min(2, 'Tape ton nom d\'entrainement')
        .required('Nom de l\'entrainement requis'),
    sport: yup
        .string('Entre le nom du sport')
        .min(2, 'Tape le nom du sport')
        .required('Nom du sport requis'),
    description: yup
        .string('Description de l\'entrainement')
        .min(20, 'Tape ta descrition d\'entrainement')
        .required('Description requis'),
    level: yup
        .number('Entre la difficulté de l\'entrainement')
        .required('difficulté requise'),
});



const Form = () => {

    const dispatch = useDispatch();

    const picturePreview = useSelector((state) => (state.trainings.picturePreview));
    const isLoadedPicture = useSelector((state) => (state.trainings.isLoadedPicture));
    const sports = useSelector((state)=>(state.data.sports));
    

    useEffect(()=>()=>{
        dispatch({
            type :'UNMOUNT_TRAINING_PICTURE',
        });
    },[]);

    const handleUploadFile = (event) => {
        const file = event.target.files[0];
        const URLToFile = URL.createObjectURL(file);
        dispatch({
            type: 'UPLOAD_TRAINING_PICTURE',
            file: URLToFile,
        });
    };

    const initialValues = {
        name: '',
        sport: '',
        description: '',
        level: '',
    }

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (formValues) => {
            dispatch ({
                type: 'ASK_CREATE_TRAINING', 
                values: formValues, 
                picture : picturePreview,
            });
            
        },
    });
    return (
        <main className="main-content main-content-training-create">
          
            <h2 className="main-content-title" >
            Création d'un entrainement
            </h2>

            <form className="main-content-training-create-form" onSubmit={formik.handleSubmit}>

                <div className="main-content-training-create-picture">
                    <Avatar  alt="Nom Prénom"
                        src={picturePreview}
                    />
                    <label 
                        className={!isLoadedPicture ? 'navbar-button': 'navbar-button navbar-button--open'} 
                    >
                        {isLoadedPicture ? <ChangeCircleOutlined /> : <AddAPhotoOutlined />}
                        <input name="picture" type="file" onChange={handleUploadFile} />
                    </label>
                </div>

                <TextField 
                    className="main-content-training-create-form-input"
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

                <FormControl variant="standard">
                    <InputLabel id="sports-list">Sport</InputLabel>
                    <Select
                        className="main-content-training-create-form-select"
                        name="sport"
                        labelId="sports-list"
                        id="sports-list"
                        value={formik.values.sport}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.sport && Boolean(formik.errors.sport)}
                        helperText={formik.touched.sport && formik.errors.sport}
                        label="Sport"
                    >
                        <MenuItem name="category" value="">
                            <em>None</em>
                        </MenuItem>
                        {sports.map((sport)=>( 
                            <MenuItem 
                                name="sport" 
                                value={sport.id}
                                key={sport.id}
                            >
                                {sport.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <TextField
                    className="main-content-training-create-form-multi"
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
                    rows={5}
                />

                

                <FormControl variant="standard"  >
                    <InputLabel id="demo-simple-select-standard-label">Niveau</InputLabel>
                    <Select
                        className="main-content-training-create-form-select"
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

                <div className = "footer-content">
                    <Button 
                        variant="contained" 
                        type="submit" 
                        endIcon={<BuildCircleIcon />}
                        // disabled={! formik.isValid || formik.isSubmitting}
                    >
                        valider
                    </Button> 
                </div>          
            </form>
                
             
        </main >
    )
}

export default Form;