import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

import { useDispatch , useSelector} from "react-redux";
import { Redirect } from "react-router";

import { Menu, Close} from "@material-ui/icons";
import { Logout } from "@mui/icons-material";

import Connectpop from '../PopUp/ConnectPop';
import SignupPop from '../PopUp/SignUpPop'
import NavButton from "../../Materials/NavButton";


import logo from '../../../assets/images/svg/we are coach long basket.svg';
// import avatar from '../../../assets/images/avatar_Maeva.jpg';


import './style.scss';

const Nav = () => {
    const dispatch = useDispatch();
    const redirectedTo = useSelector((state)=>state.home.redirectedTo);
    const redirectionState = useSelector((state)=>state.home.redirectionState);
    const menuDropState = useSelector((state)=>(state.home.dropMenu));
    const connectionStatus = useSelector((state) =>(state.home.connected));
    const userMenuState = useSelector((state) => (state.home.userMenu));
    const avatar = useSelector((state) => (state.user.picture));
    const handleClickAvatar = () => {
        dispatch({
            type : 'REDIRECTION',
            path : '/Utilisateur',
        });
        dispatch({
            type:'TOGGLE_MENU',
        });
    }; 
    const handleDeconnection = () => {
        dispatch({type : 'LOGOUT'});
    };
    const handleClickDropMenu = () => (dispatch({type : 'TOGGLE_DROP'}))
   
    return(
        
        <div className="navbar">
            {redirectionState && <Redirect to={redirectedTo}/>}
            <NavButton 
                className={!menuDropState ? 'navbar-button navbar-button-navdrop': 'navbar-button navbar-button-navdrop navbar-button--open'} 
                content={!menuDropState? <Menu /> : <Close /> } 
                handleClick= {handleClickDropMenu}            
            />
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
                    to="/Entrainement"
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
                <NavLink
                    className="navbar-linkgroup-link"
                    activeClassName="navbar-linkgroup-link--active"
                    to="/CreerEntrainement"
                    exact
                >
                    Créer un entrainement
                </NavLink>
            </div>
            {connectionStatus && 
            <div className="navbar-buttongroup-connect">
                <NavButton 
                    className={!connectionStatus ? 'navbar-button navbar-button-avatar ': 'navbar-button navbar-button-avatar navbar-button--open'} 
                    content= {
                        <Logout />
                    }
                    handleClick={handleDeconnection}
                />
                <NavButton 
                    className={!userMenuState ? 'navbar-button navbar-button-avatar ': 'navbar-button navbar-button-avatar navbar-button--open'} 
                    content= {
                        <img
                            src={avatar} 
                            className={!userMenuState ? 'user-avatar' : 'user-avatar user-avatar--open'}
                            alt="Avatar de l'utilisateur" 
                        />
                    }
                    handleClick={handleClickAvatar}
                />
            </div>
            }
            {!connectionStatus && 
            <div className="navbar-buttongroup-unconnect">
                <SignupPop />
                <Connectpop />
            </div>}
        </div>
    );
}

export default Nav;