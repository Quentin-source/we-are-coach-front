import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Button from '@mui/material/Button';

import './style.scss';

const Usermenu = () => {

    const dispatch = useDispatch();

    const handleDeconnection = () => {
        dispatch({type : 'LOGOUT'});
    };

    const menuState = useSelector((state)=> state.home.userMenu)
    return (
        <div className={!menuState ? 'dropmenu dropmenu-user dropmenu-user--hidden' : 'dropmenu dropmenu-user'}>
            <Link to="/Utilisateur"> Mon profil</Link>
            <Link to="/"> Mes entrainements</Link>
            <Link to="/"> Mes favoris</Link>
            <Button color="primary" variant="outlined" onClick={handleDeconnection} className="navbar-deconnect-button"> Deconnection </Button>
        </div>
    );
} 

export default Usermenu;