import { useDispatch, useSelector } from 'react-redux';

import Button from '@mui/material/Button';
import NavButton from '../../NavButton'
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { LockOpen } from '@material-ui/icons';

const Connectpop = () =>  {
    const dispatch = useDispatch();

    const handleClickOpen = () => {
        dispatch({type : 'OPEN_CONNECTPOP'});
    };

    const handleClose = () => {
        dispatch({type: 'CLOSE_CONNECTPOP'});
    };

    const handleConnection = () => {
        dispatch({type: 'CONNECTION'});
        
    };

    const connectPopState = useSelector ((state) => (state.home.connectPop));


    return (
        <div>
            <NavButton 
                className={!connectPopState ? 'navbar-button navbar-button-avatar ': 'navbar-button navbar-button-avatar navbar-button--open'} 
                SvgContent={<LockOpen />} 
                handleClick= {handleClickOpen}           
            />
            <Dialog color="primary" open={connectPopState} onClose={handleClose}>
                <DialogTitle>Connection</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                Veuillez entrer vos informations de connection...
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
                        sx={{borderColor:'grey'}}
                    />
                    <TextField
                        color="primary"
                        margin="dense"
                        id="password"
                        label="Mot de passe"
                        type="password"
                        fullWidth
                        variant="standard"
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

export default Connectpop;