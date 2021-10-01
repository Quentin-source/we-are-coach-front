import { useFormik} from 'formik';
import * as yup from 'yup';

import { useDispatch, useSelector } from 'react-redux';



import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { TextField, Button, Grid, Avatar, Typography, FormControlLabel, Checkbox } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';

import './style.scss';

import { AssignmentIndOutlined } from '@material-ui/icons';

const Form = () => {
    return (
        <div>
            <form onSubmit>
                <TextField 
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
            <div>
                <Box className="main-box-content" >
                    <div>
                        <TextField
                            id="outlined-multiline-static"
                            label="Multiline"
                            multiline
                            rows={8}
                            defaultValue="Default Value"
                            sx={{
                                width: 800,
                                maxWidth: '100%',
                            }}
                        />
                    </div>
                    <div>
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel id="demo-simple-select-standard-label">Image</InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                value
                                onChange
                                label="Age"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </Box>
                <Box>            
                    <div className="main-box-content-level">
                        <div className="main-box-content-level-test">
                            <FormControl variant="standard" sx={{ m: 0, minWidth: 120 }}>
                                <InputLabel id="demo-simple-select-standard-label">Niveau</InputLabel>
                                <Select
                                    labelId="demo-simple-select-standard-label"
                                    id="demo-simple-select-standard"
                                    value
                                    onChange
                                    label="Age"
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div>
                            <TextField
                                id="standard-basic"
                                label="Standard"
                                variant="standard" />
                        </div>
                    </div>
                </Box>
            </div>
            <div className = "footer-content">
                <Button variant="contained" endIcon={<BuildCircleIcon />}>
                    valider
                </Button>
            </div>  
        </div>
    )
}

export default Form;