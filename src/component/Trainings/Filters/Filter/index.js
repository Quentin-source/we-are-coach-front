import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useSelector, useDispatch } from 'react-redux';


const Filter = ({type}) => {
    const filterValue = useSelector((state) => (state.Training.filterValue));
    const dispatch = useDispatch();
    console.log(filterValue);
    const handleChange = (event) => {
        console.log(event.target.value);
        dispatch({
            type: 'FILTER_VALUE',
            newFilter: event.target.value,
        })        
    };
    return (
        <div>
            <FormControl sx={{ m: 1, minWidth: 180 }}>
                <InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel>
                <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={filterValue}
                    onChange={handleChange}
                    label="Age"
                    variant="standard"
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Twenty</MenuItem>
                    <MenuItem value={21}>Twenty one</MenuItem>
                    <MenuItem value={22}>Twenty one and a half</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}

export default Filter;



{/* <FormControl variant="standard"sx={{ m: 1, minWidth: 120 }}>
                <InputLabel variant="standard" id="demo-simple-select-helper-label"></InputLabel>
                <Autocomplete
                    
                    disablePortal
                    id="combo-box-demo"
                    options={top100Films}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} variant="standard" label="Movie" />}
                    onChange={handleChange}
                    value={filterValue.label}
                    
                />
  
                 <FormHelperText>With label + helper text</FormHelperText>
            </FormControl> */}
