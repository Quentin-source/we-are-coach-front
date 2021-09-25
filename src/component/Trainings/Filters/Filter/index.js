import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

const Filter = () => {

    const handleChange = (event) => {
    };

    return (
        <div>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value="25"
                    label="Age"
                    onChange={handleChange}
                    variant="standard"
                >
                    <MenuItem value="">
                        <Checkbox defaultChecked /><em>None</em>
                    </MenuItem>
                    <MenuItem value={10}><Checkbox />Ten</MenuItem>
                    <MenuItem value={20}><Checkbox />Twenty</MenuItem>
                    <MenuItem value={30}><Checkbox />Thirty</MenuItem>
                </Select>
                {/* <FormHelperText>With label + helper text</FormHelperText> */}
            </FormControl>

        </div>
    );
}

export default Filter;