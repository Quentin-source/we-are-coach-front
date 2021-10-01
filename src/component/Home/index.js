import { useDispatch } from "react-redux";
import Categories from "./Categories";
import HomeTraining from "./HomeTraining";


import './style.scss'


const Home = () => {
    const dispatch = useDispatch();
    dispatch({type:'LOADING_ON'});
    return (
        <main className="main-content main-content-home">
            <Categories />
            <HomeTraining />
        </main>
    );
}

export default Home;