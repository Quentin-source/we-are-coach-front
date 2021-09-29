import './style.scss';

import TextField from '@mui/material/TextField';

import { useSelector, useDispatch } from 'react-redux';

const SearchBar = () => {
    const searchValue = useSelector((state) => (state.trainings.searchValue));
    console.log(searchValue);
    const dispatch = useDispatch();

    const handleChange = (event) => {
        dispatch({
            type: 'SEARCH_VALUE',
            newSearch: event.target.value,
        })        
    };
    return (
        <TextField 
            className="trainings-header-searchbar"
            // startAdornment={
            //     <InputAdornment position="start">
            //       <AccountCircle />
            //     </InputAdornment>
            //     }
            value={searchValue}
            onChange={handleChange}
            id="outlined-search"
            variant="standard"
            label="Search field"
            type="search" 
        /> 
    )      
}

export default SearchBar;