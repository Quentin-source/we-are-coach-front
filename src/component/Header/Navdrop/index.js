import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import './style.scss';

const Navdrop = () => {
    const navDropState = useSelector((state)=> state.home.dropMenu)
    return (
        <div className={navDropState ? 'navdrop navdrop--active' : 'navdrop'} >
            <Link> Acceuil</Link>
            <Link> Entrainement</Link>
            <Link> Constact</Link>
        </div>
    );
} 

export default Navdrop;