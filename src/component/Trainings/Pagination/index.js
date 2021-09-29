import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useSelector, useDispatch } from 'react-redux';

const Paginations = () => {
    const changePage = useSelector ((state) => state.trainings.page);
    // const dispatch = useDispatch
    const handleChange = (event, value) => {
        console.log(event, value);
    };

    return (
        <Stack spacing={2}>
            <Pagination count={10} page={changePage} onChange={handleChange}/>
        </Stack>
    )
}

export default Paginations;