import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Categories from "./Categories";
import HomeTraining from "./HomeTraining";


import './style.scss'


const Home = () => {
    const dispatch = useDispatch();
    dispatch({type:'LOADING_ON'});

    useEffect(()=>{
        dispatch({type:'FETCH_HOME'});
        dispatch({type : 'CLEAN_MENU'});   
    });
    
    return (
        <main className="main-content main-content-home">
            <Categories />
            <HomeTraining />
        </main>
    );
}

export default Home;