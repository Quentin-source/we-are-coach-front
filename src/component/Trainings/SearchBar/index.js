import './style.scss';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useSelector, useDispatch } from 'react-redux';

const SearchBar = () => {
    const searchValue = useSelector((state) => (state.Training.searchValue));
    console.log(searchValue);
    const dispatch = useDispatch();

    const handleChange = (event) => {
        dispatch({
            type: 'SEARCH_VALUE',
            newSearch: event.target.value,
        })        
    };
    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField value={searchValue} onChange={handleChange} id="outlined-search" label="Search field" type="search" />
        </Box>  
    )      
}


export default SearchBar;