import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

import { useDispatch , useSelector} from "react-redux";

import logo from '../../../assets/images/Logo.jpg';
import avatar from '../../../assets/images/avatar_Maeva.jpg';
import './style.scss';

const Nav = () => {
    const dispatch = useDispatch();
    const menuDropState = useSelector((state)=>(state.home.dropMenu));
    const handleClickAvatar = () => (dispatch({type : 'TOGGLE_MENU'})); 
    const handleClickDropMenu = () => (dispatch({type : 'TOGGLE_DROP'}))
    return(
        <div className="navbar">
            <button className="navbar-drop-button" type="button" onClick={handleClickDropMenu}>
                <div className={menuDropState ? 'navbar-drop-button-bar Up' : 'navbar-drop-button-bar changeUp Up'}></div>
                <div className={menuDropState ? 'navbar-drop-button-bar Center' : 'navbar-drop-button-bar changeCenter Center'}></div>
                <div className={menuDropState ? 'navbar-drop-button-bar Down' : 'navbar-drop-button-bar changeDown Down'}></div>        
            </button>
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
    );
}

export default Nav;