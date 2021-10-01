import { Favorite, FavoriteBorder } from '@material-ui/icons';
import './style.scss';


const CustomNote = ({note}) => {

    return(
        <div className="custom-note" >
            {note > 0 ? <Favorite /> :<FavoriteBorder />}
            {note > 1 ? <Favorite /> :<FavoriteBorder />}
            {note > 2 ? <Favorite /> :<FavoriteBorder />}
            {note > 3 ? <Favorite /> :<FavoriteBorder />}
            {note > 4 ? <Favorite /> :<FavoriteBorder />}    
        </div > 
    );
}

export default CustomNote;

