import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useDispatch, useSelector } from 'react-redux';

import './style.scss';

const SnackBar = () => {
    const dispatch = useDispatch();
    const snackBarStatus = useSelector((state)=>state.home.snackBar);
    const snackBarAlert = useSelector((state)=>state.home.snackAlert);


    const handleClose = (event, reason) => {
        dispatch({type:'CLOSE_SNACK'});
    }


    return(
        <Snackbar open={snackBarStatus} autoHideDuration={2000} onClose={handleClose}>
            <Alert onClose={handleClose}
                severity={snackBarAlert.severity} elevation={6}
                variant="filled"
            >
                {snackBarAlert.message}
            </Alert>
        </Snackbar>
    );


};

export default SnackBar;