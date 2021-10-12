import { NavLink } from "react-router-dom";
import SnackBar from "../Materials/SnackBar/index";
import { Redirect } from "react-router";
import './style.scss'
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";


const Footer = () => {
    const dispatch = useDispatch();
    const redirectState = useSelector((state)=> state.home.redirect);
    const redirectTo = useSelector((state)=> state.home.redirectTo);

    useEffect(()=> dispatch({
        type: 'REDIRECT_OFF',
    }));

    return (
        <div className= 'footer'>
            {redirectState && <Redirect to={redirectTo}/> }
            <SnackBar />
            <NavLink className="footer-link" to="/FAQ">FAQ</NavLink>
            <NavLink className="footer-link" to="/AboutUs">A propos de nous </NavLink>
            <NavLink className="footer-link" to="/CGU">CGU</NavLink>
        </div>
    );
};

export default Footer;
