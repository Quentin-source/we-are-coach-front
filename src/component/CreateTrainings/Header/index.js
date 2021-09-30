import { useFormik} from 'formik';
import * as yup from 'yup';

import { useDispatch, useSelector } from 'react-redux';



import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { TextField, Button, Grid, Avatar, Typography, FormControlLabel, Checkbox } from '@mui/material';



import { AssignmentIndOutlined } from '@material-ui/icons';






const Header = () => {
    return (
        <form onSubmit>
            <TextField 
                fullWidth
                variant="standard"
                id="name"
                name="trainingName"
                label="Nom de l'entrainement"
                value
                onChange
                error
                helperText
            />
            <TextField 
                fullWidth
                variant="standard"
                id="name"
                name="sportName"
                label="Nom du sport"
                value="yo"
                onChange
                error
                helperText
            />
        </form>   
    )
}

export default Header;