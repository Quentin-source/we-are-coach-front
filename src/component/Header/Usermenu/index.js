import { Link } from "react-router-dom";
import avatar from '../../../logo.svg';

const Usermenu = () => (
   <div className="usermenu">
        <img src={avatar} className="user-avatar" alt="Avatar de l'utilisateur" />
        <div className="usermenu-dropdown">
            <Link> Mon profil</Link>
            <Link> Mes entrainements</Link>
            <Link> Mes favoris</Link>
            <Link>Deconnection</Link>
        </div>
   </div>
); 

export default Usermenu;