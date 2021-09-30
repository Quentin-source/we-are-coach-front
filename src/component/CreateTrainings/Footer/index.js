import Button from '@mui/material/Button';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';

import './style.scss';

const Footer = () => {
    return (
        <div className = "footer-content">
            <Button variant="contained" endIcon={<BuildCircleIcon />}>
                valider
            </Button>
        </div>
    )
}

export default Footer;