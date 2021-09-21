import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

import { useDispatch } from "react-redux";

import logo from '../../../assets/images/Logo.jpg';
import avatar from '../../../assets/images/avatar_Maeva.jpg';
import './style.scss';

import Usermenu from '../Usermenu/';


const Nav = () => {
    const dispatch = useDispatch();
    const handleClickAvatar = () => (dispatch({type : 'TOGGLE_MENU'})); 
    return(
        <>
            <div className="navbar">
                <Link to="/"> <img src={logo} className="header-logo" alt="Logo We are coach" /></Link>
                <div className="navbar-linkgroup">
                    <NavLink
                        className="navbar-linkgroup-link"
                        activeClassName="navbar-linkgroup-link--active"
                        to="/"
                        exact
                    >
                        Acceuil 
                    </NavLink>
                    <NavLink
                        className="navbar-linkgroup-link"
                        activeClassName="navbar-linkgroup-link--active"
                        to="/Entrainements"
                        exact
                    >
                        Entrainement
                    </NavLink>
                    <NavLink
                        className="navbar-linkgroup-link"
                        activeClassName="navbar-linkgroup-link--active"
                        to="/Contacts"
                        exact
                    >
                        Contact
                    </NavLink>
                </div>
                <button type="button" onClick={handleClickAvatar}><img src={avatar} className="user-avatar" alt="Avatar de l'utilisateur" /></button>
            </div>
            <Usermenu />
        </>
    );
}

export default Nav;