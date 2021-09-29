import { useDispatch, useSelector } from 'react-redux';

import Button from '@mui/material/Button';
import NavButton from '../../NavButton'
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { AssignmentIndOutlined } from '@material-ui/icons';

import './style.scss'

const SignUppop = () =>  {
    const dispatch = useDispatch();

    const handleClickOpen = () => {
        dispatch({type : 'OPEN_SIGNPOP'});
    };

    const handleClose = () => {
        dispatch({type: 'CLOSE_SIGNPOP'});
    };

    const handleConnection = () => {
        dispatch({type: 'LOGIN'});
        
    };

    const handleChangeUserEmail = (event) => {
        dispatch({
            type: 'UPDATE_USER_EMAIL',
            value: event.target.value
        });
    }

    const handleChangeUserPassword = (event) => {
        dispatch({
            type: 'UPDATE_USER_PASSWORD',
            value: event.target.value
        });
    }

    const signUpPopState = useSelector ((state) => (state.home.signUpPop));
    const userEmailContent = useSelector((state) => (state.user.userEmail));
    const userPasswordContent = useSelector((state)=>(state.user.userPassword));

    return (
        <div>
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
                    <TextField
                        autoFocus
                        className="navbar-signpop-input"
                        color="primary"
                        margin="dense"
                        type="label"
                        id="email"
                        label="Adresse Email"
                        fullWidth
                        variant="standard"
                        value={userEmailContent}
                        onChange={handleChangeUserEmail}
                    />
                    <div className="navbar-signpop-container-width">
                        <TextField
                            className="navbar-signpop-input"
                            autoFocus
                            color="primary"
                            margin="dense"
                            id="firstname"
                            label="Prénom"
                            type="label"
                            fullWidth
                            variant="standard"
                            value={userEmailContent}
                            onChange={handleChangeUserEmail}
                        />
                        <TextField
                            className="navbar-signpop-input"
                            color="primary"
                            margin="dense"
                            id="lastname"
                            label="Nom"
                            fullWidth
                            variant="standard"
                            value={userPasswordContent}
                            onChange={handleChangeUserPassword}
                        />
                    </div>
                    <TextField
                        className="navbar-signpop-input"
                        autoFocus
                        color="primary"
                        margin="dense"
                        id="name"
                        label="Addresse"
                        type="email"
                        fullWidth
                        variant="standard"
                        value={userEmailContent}
                        onChange={handleChangeUserEmail}
                    />
                    <TextField
                        className="navbar-signpop-input"
                        color="primary"
                        margin="dense"
                        id="name"
                        label="Addresse"
                        type="email"
                        fullWidth
                        variant="standard"
                        value={userEmailContent}
                        onChange={handleChangeUserEmail}
                    />
                    <TextField
                        className="navbar-signpop-input"
                        color="primary"
                        margin="dense"
                        id="name"
                        label="Addresse"
                        type="email"
                        fullWidth
                        variant="standard"
                        value={userEmailContent}
                        onChange={handleChangeUserEmail}
                    />
                    <TextField
                        className="navbar-signpop-input"
                        color="primary"
                        margin="dense"
                        id="name"
                        label="Addresse"
                        type="email"
                        fullWidth
                        variant="standard"
                        value={userEmailContent}
                        onChange={handleChangeUserEmail}
                    />
                    <TextField
                        className="navbar-signpop-input"
                        color="primary"
                        margin="dense"
                        id="name"
                        label="Addresse"
                        type="email"
                        fullWidth
                        variant="standard"
                        value={userEmailContent}
                        onChange={handleChangeUserEmail}
                    />
                   

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Annuler</Button>
                    <Button onClick={handleConnection}>Connection</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default SignUppop;