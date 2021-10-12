import './style.scss';
import PropTypes from 'prop-types';


const NavButton = ({content, className, handleClick}) => {

    return(
        <button 
            className={className}
            type="button"
            onClick={handleClick}
        >
            {content}
        </button>
    );

}

NavButton.propTypes = {
    content: PropTypes.object.isRequired,
    className: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired,
};
  

export default NavButton;