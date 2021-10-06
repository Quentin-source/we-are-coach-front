import { useSelector } from 'react-redux';
import Filter from './Filter';
import './style.scss';

import CustomLevel from '../../../Materials/CustomLevel';
import CustomNote from '../../../Materials/CustomNote';


const Filters = () => {
    // const categoriesList = [
    //     'Sport de terre',
    //     'Sport de mer',
    //     'Sport de glisse',
    //     'Sport de merde',
    // ];

    // const sportsList = [
    //     'Judo',
    //     'Basket',
    //     'foot',
    //     'curling',
    // ];

    const levelList = [
        <CustomLevel level="1"/>,
        <CustomLevel level="2"/>,
        <CustomLevel level="3"/>,
        <CustomLevel level="4"/>,
        <CustomLevel level="5"/>,
    ];

    const NoteList = [
        <CustomNote note="1" />,
        <CustomNote note="2" />,
        <CustomNote note="3" />,
        <CustomNote note="4" />,
        <CustomNote note="5" />,
    ];
    
    const categoriesList = useSelector((state)=>(state.data.categories));
    const sportsList = useSelector((state)=>(state.data.sports));
    


    return (
        <div className="tainings-filters">
            <Filter filterKey="filterCatValue" label="Catégorie" optionsObject={categoriesList} />
            <Filter filterKey="filterSportValue" label="Sport" optionsObject={sportsList} />
            <Filter filterKey="filterLevelValue" label="Niveau" optionsArray={levelList} />  
            <Filter filterKey="filterNoteValue"label="Note" optionsArray={NoteList} />
        </div>
    );
}

export default Filters;
