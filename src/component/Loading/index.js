import './style.scss'
import { useSelector } from 'react-redux';

import { CircularProgress } from '@mui/material';

import logoLoader from '../../assets/images/svg/we are coach long basket.svg'


const Loading = () => {
    const loadingStatus = useSelector((state)=>(state.home.loading));
    
    return (
        <div className={loadingStatus ? 'loader loader-main loader-main--true' : 'loader loader-main loader-main--false'}>
            
            <CircularProgress/>
            <img src={logoLoader} className ='loader-main-logo' alt="loading" />

        </div>
    );


}

export default Loading;