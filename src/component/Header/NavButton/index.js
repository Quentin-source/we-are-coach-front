import './style.scss';


const NavButton = ({SvgContent, className, handleClick}) => {

    return(
        <button className={className} type="button" onClick={handleClick}>
            {SvgContent}
        </button>
    );

}

export default NavButton;