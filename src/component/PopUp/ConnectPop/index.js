import { useDispatch, useSelector } from 'react-redux';

import Button from '@mui/material/Button';
import NavButton from '../../Materials/NavButton';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { LockOpen } from '@material-ui/icons';

const Connectpop = () =>  {
    const dispatch = useDispatch();
    const connectPopState = useSelector ((state) => (state.home.connectPop));
    const userEmailContent = useSelector((state) => (state.user.inputEmail));
    const userPasswordContent = useSelector((state)=>(state.user.inputPassword));

    const handleClickOpen = () => {
        dispatch({type : 'OPEN_CONNECTPOP'});
    };

    const handleClose = () => {
        dispatch({type: 'CLOSE_CONNECTPOP'});
    };

    const handleConnection = () => {
       
        dispatch({type: 'ASK_LOGIN',
            email:userEmailContent,
            password: userPasswordContent,
        });
        
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

    

    return (
        <div>
            <NavButton 
                className={!connectPopState ? 'navbar-button': 'navbar-button navbar-button--open'} 
                content={<LockOpen />} 
                handleClick= {handleClickOpen}           
            />
            <Dialog color="primary" open={connectPopState} onClose={handleClose}>
                <DialogTitle>Connexion</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                Veuillez entrer vos informations de connexion...
                    </DialogContentText>
                    <TextField
                        autoFocus
                        color="primary"
                        margin="dense"
                        id="name"
                        label="Addresse Email"
                        type="email"
                        fullWidth
                        variant="standard"
                        value={userEmailContent}
                        onChange={handleChangeUserEmail}
                    />
                    <TextField
                        color="primary"
                        margin="dense"
                        id="password"
                        label="Mot de passe"
                        type="password"
                        fullWidth
                        variant="standard"
                        value={userPasswordContent}
                        onChange={handleChangeUserPassword}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Annuler</Button>
                    <Button onClick={handleConnection}>Connexion</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default Connectpop;