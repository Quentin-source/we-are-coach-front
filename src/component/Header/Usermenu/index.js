import { Link , useHistory} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Button from '@mui/material/Button';

import './style.scss';

const Usermenu = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const handleDeconnection = () => {
        dispatch({type : 'LOGOUT'});
        history.push('/');
        dispatch({
            type:'OPEN_SNACK',
            message : 'Deconnexion!',
            severity : 'success',
        });
    };

    const menuState = useSelector((state)=> state.home.userMenu)
    return (
        <div className={!menuState ? 'dropmenu dropmenu-user dropmenu-user--hidden' : 'dropmenu dropmenu-user'}>
            <Link to="/Utilisateur"> Mon profil</Link>
            <Link to="/MesEntrainements"> Mes entrainements</Link>
            <Link to="/CreerEntrainement"> Créer un entrainenemt</Link>
            <Button color="primary" variant="outlined" onClick={handleDeconnection} className="navbar-deconnect-button"> Deconnexion </Button>
        </div>
    );
} 

export default Usermenu;