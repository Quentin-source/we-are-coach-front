import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useSelector, useDispatch } from 'react-redux';

// filterLevelValue: "",
// filterCatValue: "",
// filterSportValue: "",
// filterNoteValue: "",


const Filter = ({filterKey, label, optionsArray}) => {
    const filterValue = useSelector((state) => state.trainings[filterKey]);
    console.log(filterValue);
    const dispatch = useDispatch();
    const handleChange = (event) => {
        console.log(event.target.value);
        dispatch({
            type: 'MODIFY_FILTER',
            value: event.target.value,
            filterKey: filterKey,
        })        
    };
    return (
        <div>
            <FormControl sx={{ m: 1, minWidth: 180 }}>
                <InputLabel id="demo-simple-select-autowidth-label">{label}</InputLabel>
                <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={filterValue}
                    onChange={handleChange}
                    label={label}
                    multiple={true}
                    variant="standard"
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {optionsArray.map((option)=>(<MenuItem value={option}>{option}</MenuItem>))}
                </Select>
            </FormControl>
        </div>
    );
}

export default Filter;