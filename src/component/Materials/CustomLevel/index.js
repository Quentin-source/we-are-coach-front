import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import './style.scss';


const CustomLevel = ({level}) => {

    return(
        <div className="custom-level" >
            {level > 0 ? <FavoriteIcon /> :<FavoriteBorderIcon />}
            {level > 1 ? <FavoriteIcon /> :<FavoriteBorderIcon />}
            {level > 2 ? <FavoriteIcon /> :<FavoriteBorderIcon />}
            {level > 3 ? <FavoriteIcon /> :<FavoriteBorderIcon />}
            {level > 4 ? <FavoriteIcon /> :<FavoriteBorderIcon />}    
        </div > 
    );
}

export default CustomLevel;

