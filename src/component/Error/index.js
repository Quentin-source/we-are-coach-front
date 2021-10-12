
import LogoBasket from '../../assets/images/svg/we are coach basket true.svg';
import LogoWAC from '../../assets/images/svg/we are coach.svg';
import { useSelector } from 'react-redux';


import './style.scss';



const Error = () => {

    const type = useSelector((state)=> state.error.type);
    const message = useSelector((state)=> state.error.message);


    return (
        <main className="error-content">
            {/* <div className="error-logo">
                <img  src={LogoWAC} alt="Logo we are coach!"/>
            </div> */}
            <div className="error-group animate__animated animate__pulse">
                <div className="error-type animate__animated animate__slideInUp">
                    <h1>{type}</h1>
                </div>
                <div className="error-basket animate__animated animate__slideInUp">
                    <img  src={LogoBasket} alt="Logo basket interdite"/>
                    <div className="error-basket-bar error-basket-bar-top"></div>
                    <div className="error-basket-bar error-basket-bar-bot"></div>
                </div>
            </div>
            <div className="error-message">
                <h1 className="animate__animated animate__slideInUp">{message}</h1>
            </div>
        </main>

    );
}



export default Error;
