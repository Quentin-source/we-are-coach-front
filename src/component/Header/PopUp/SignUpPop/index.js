import { useFormik} from 'formik';
import * as yup from 'yup';

import { useDispatch, useSelector } from 'react-redux';

import NavButton from '../../NavButton'

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { TextField, Button, Grid, Avatar, Typography } from '@mui/material';



import { AssignmentIndOutlined } from '@material-ui/icons';



const validationSchema = yup.object({
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
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
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
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
                            label="Password"
                            type="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password}
                        />
                        <DialogActions>
                            <Button onClick={handleClose}>Annuler</Button>
                            <Button color="primary" type="submit">Envoyer</Button>
                        </DialogActions>
                    </form>
                </DialogContent>
                   
            </Dialog>
        </>
    );
};


export default SignUpPop;


// import { Grid, Paper, Avatar, Typography, TextField, Button, FormControlLabel } from '@material-ui/core';
// import Checkbox from '@mui/material/Checkbox';
// import * as Yup from 'yup';

// import './style.scss';



// const SignUp = () => {
//     const paperStyle={padding:'30px 20px', width:300, margin:'20px auto'}
//     const headerStyle={margin:0}
//     const initialValues={
//         Nom:'',
//         Prénom:'',
//         Âge:'',
//         Email:'',
//         Ville:'',
//         MotDepasse:'',
//         ConfirmeMotDePasse:'',
//         TermsEtConditons: false
//     }
//     const validationSchema=Yup.object().shape({
//         NomPrenom: Yup.string().min(5, "C'est trop court!").required('Required'),
//         Âge: Yup.string().min(17, "Trop jeune pour t'inscrire!").max(80, "Trop vieux pour t'inscrire!").required('Required'),
//         Email: Yup.string().email('Entre un mail valide').required('Required'),

//     })
//     const onSubmit=(values,props)=>{
//         console.log(values)
//     }

//     return (
//         <Grid>
//             <Paper elevation={20} style={paperStyle} >
//                 <Grid align='center'>
//                     <h2 style={headerStyle}>S'inscrire</h2>
//                     <Typography variant='caption' gutterBottom>Créer votre compte</Typography>
                    
//                     <Avatar alt="Nom Prénom"
//                         src="/static/images/avatar/1.jpg"
//                         sx={{ width: 60, height: 60 }}>
                    
//                     </Avatar>
//                 </Grid>
//                 <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
//                     {(props)=>(
//                         <Form>
//                             <Field as={TextField} fullWidth name='Nom Prénom' label='Nom Prénom' placeholder='Entre ton Nom et Prénom' helperText={<ErrorMessage name='NomPrenom' />} />
//                             <Field as={TextField} fullWidth name='Âge' label='Votre Âge' placeholder='Entre ton âge'
//                                 helperText={<ErrorMessage name='Âge' />}/>
//                             <Field as={TextField} fullWidth name='Email' label='Votre Email' placeholder='Entre ton adresse mail'
//                                 helperText={<ErrorMessage name='Email' />}  />
//                             <Field as={TextField} fullWidth name='Ville' label='Votre Ville' />
//                             <Field as={TextField} fullWidth name='MotDePasse' label='Mot de Passe' />
//                             <Field as={TextField} fullWidth name='ConfirmeMotDePasse' label='Confirmer Mot de Passe' />
                    
//                             <FormControlLabel control={<Field as={Checkbox} defaultChecked />} name='TermsEtConditions' label="J'accepte les termes et conditions d'utilisation" />
//                             <Button type="submit" variant="outlined" color="primary">S'Inscrire</Button>
    
//                         </Form>
//                     )}
//                 </Formik>
//             </Paper>
//         </Grid>
//     )
// }

// export default SignUp;

