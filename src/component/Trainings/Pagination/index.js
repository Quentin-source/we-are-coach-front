import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useSelector, useDispatch } from 'react-redux';

const Paginations = () => {
    const currentPage = useSelector ((state) => state.trainings.currentPage);
    const dispatch = useDispatch();
    const handleChange = (event, value) => {
        dispatch(({
            type: 'CHANGE_PAGE',
            value: value,
        }));   
    };

    return (
        <Stack spacing={2}>
            <Pagination className="trainings-pagination" count={5} page={currentPage} onChange={handleChange}/>
        </Stack>
    )
}

export default Paginations;