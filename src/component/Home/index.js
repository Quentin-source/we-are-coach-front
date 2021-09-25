import { useDispatch } from "react-redux";
import { useEffect } from "react";

import Categories from "./Categories";
import HomeTraining from "./HomeTraining";


import './style.scss'


const Home = () => {
    return (
        <main className="main-content main-content-home">
            <Categories />
            <HomeTraining />
        </main>
    );
}

export default Home;