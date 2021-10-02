import './style.scss';


const NavButton = ({content, className, handleClick, dataTarget, dataToggle}) => {

    return(
        <button 
            className={className}
            type="button"
            onClick={handleClick}
            data-Target={dataTarget}
            data-Toggle={dataToggle}
        >
            {content}
        </button>
    );

}

export default NavButton;