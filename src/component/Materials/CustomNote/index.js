import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import './style.scss';


const CustomNote = ({note}) => {

    return(
        <div className="custom-note" >
            {note > 0 ? <FavoriteIcon /> :<FavoriteBorderIcon />}
            {note > 1 ? <FavoriteIcon /> :<FavoriteBorderIcon />}
            {note > 2 ? <FavoriteIcon /> :<FavoriteBorderIcon />}
            {note > 3 ? <FavoriteIcon /> :<FavoriteBorderIcon />}
            {note > 4 ? <FavoriteIcon /> :<FavoriteBorderIcon />}    
        </div > 
    );
}

export default CustomNote;

