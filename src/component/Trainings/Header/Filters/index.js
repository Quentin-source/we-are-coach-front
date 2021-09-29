import Filter from './Filter';
import './style.scss';


const Filters = () => {
    const categoriesList = [
        'Sport de terre',
        'Sport de mer',
        'Sport de glisse',
        'Sport de merde',
    ];

    const sportsList = [
        'Judo',
        'Basket',
        'foot',
        'curling',
    ];

    const levelList = [
        1,
        2,
        3,
        4,
        5,
    ];

    const NoteList = [
        1,
        2,
        3,
        4,
        5,
    ];
    
    


    return (
        <div className="tainings-filters">
            <Filter filterKey="filterCatValue" label="Catégorie" optionsArray={categoriesList} />
            <Filter filterKey="filterSportValue" label="Sport" optionsArray={sportsList} />
            <Filter filterKey="filterLevelValue" label="Niveau" optionsArray={levelList} />  
            <Filter filterKey="filterNoteValue"label="Note" optionsArray={NoteList} />
        </div>
    );
}

export default Filters;
