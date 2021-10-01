import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useSelector, useDispatch } from 'react-redux';

let pastPage = 0;


const Paginations = () => {
    const currentPage = useSelector ((state) => state.trainings.currentPage);
    const pageSize = useSelector((state) => state.trainings.pageSize);
    const pageCount = useSelector((state) => state.trainings.pageCount);


    const dispatch = useDispatch();
    const handleChange = (event, value) => {
    
        const trainingsContainer = document.querySelector('.trainings');
        if( value > pastPage ) {
            trainingsContainer.classList.add('trainings--pageup') 
            setTimeout(()=>(trainingsContainer.classList.remove('trainings--pageup')),1000);
        }
        else {
            trainingsContainer.classList.add('trainings--pagedown');
            setTimeout(()=>(trainingsContainer.classList.remove('trainings--pagedown')),1000);
        }
        pastPage = value;
        dispatch(({
            type: 'CHANGE_PAGE',
            value: value,
        }));   
    };

    console.log(pageCount);

    return (
        <Stack spacing={2}>
            <Pagination className="trainings-pagination" count={pageCount} page={currentPage} onChange={handleChange}/>
        </Stack>
    )
}

export default Paginations;