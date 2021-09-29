import Filters from "./Filters";
import SearchBar from "./SearchBar";

import './style.scss';

const TrainingsHeader = () => (

    <div className="trainings-header">

        <SearchBar />
        <Filters />

    </div>

)

export default TrainingsHeader;
