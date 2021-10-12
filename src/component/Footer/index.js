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
    // const scrollPage = useSelector((state)=> state.home.scrollValue);
    // let scrollDelta = 1;


    // const handleScrollEvent= (event, scrollValue, scrollPage) => {
    //     if (scrollValue + (event.deltaY/100) > 0) {
    //         scrollDelta = scrollValue + (event.deltaY/400);
    //         if(Math.ceil(scrollDelta) !== scrollPage)
    //             dispatch({
    //                 type: 'CHANGE_PAGE',
    //                 value : Math.ceil(scrollDelta),
    //             });
    //     }
            
        
    // }

    

    useEffect(()=> {
        dispatch({
            type: 'REDIRECT_OFF',
        });
        // window.addEventListener('wheel', (event)=> handleScrollEvent(event, scrollDelta, scrollPage));
    },[]);

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
