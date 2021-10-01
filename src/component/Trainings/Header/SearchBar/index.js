import { useSelector, useDispatch } from 'react-redux';


import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import './style.scss';
import SearchIcon from '@mui/icons-material/Search';


const SearchBar = () => {
    const inputSearch = useSelector((state) => (state.trainings.inputSearch));
    const dispatch = useDispatch();

    const handleChange = (event) => {
        dispatch({
            type: 'MODIFY_INPUT',
            value: event.target.value,
        })        
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({
            type: 'ASK_SEARCH',
            value: inputSearch,
        })


    }

    return (
        <form onSubmit={handleSubmit}>
            <TextField 
                className="trainings-header-searchbar"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}
                value={inputSearch}
                onChange={handleChange}
                id="outlined-search"
                type="search" 
            />
        </form> 
    )      
}

export default SearchBar;