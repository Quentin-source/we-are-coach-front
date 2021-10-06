import './style.scss';


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

export default NavButton;