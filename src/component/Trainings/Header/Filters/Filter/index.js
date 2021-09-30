import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useSelector, useDispatch } from 'react-redux';

// filterLevelValue: "",
// filterCatValue: "",
// filterSportValue: "",
// filterNoteValue: "",


const Filter = ({filterKey, label, optionsObject, optionsArray}) => {
    const filterValue = useSelector((state) => state.trainings[filterKey]);
    const dispatch = useDispatch();
    const handleChange = (event) => {
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
                    // multiple={true}
                    variant="standard"
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {optionsArray !== undefined && optionsArray
                        .map((option)=>(
                            <MenuItem key={option} value={option}>{option}</MenuItem>
                        ))}
                    {optionsObject !== undefined && optionsObject
                        .map((option)=>(
                            <MenuItem key={option.name} value={option.name}>{option.name}</MenuItem>
                        ))}
                </Select>
            </FormControl>
        </div>
    );
}

export default Filter;