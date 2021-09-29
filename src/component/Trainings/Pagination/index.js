import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useSelector, useDispatch } from 'react-redux';

const Paginations = () => {
    const currentPage = useSelector ((state) => state.trainings.currentPage);
    // const dispatch = useDispatch
    const handleChange = (event, value) => {
        console.log(event, value);
    };

    return (
        <Stack spacing={2}>
            <Pagination count={5} page={currentPage} onChange={handleChange}/>
        </Stack>
    )
}

export default Paginations;