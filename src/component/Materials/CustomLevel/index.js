import { FlashOn } from '@material-ui/icons';
import PropTypes from 'prop-types';
  
import './style.scss';


const CustomLevel = ({level}) => {

    return(
        <div className="custom-level" >
            {level > 0 && <FlashOn />}
            {level > 1 && <FlashOn />}
            {level > 2 && <FlashOn />}
            {level > 3 && <FlashOn />}
            {level > 4 && <FlashOn />}    
        </div > 
    );
}

CustomLevel.propTypes = {
    level: PropTypes.number.isRequired,
};

export default CustomLevel;

