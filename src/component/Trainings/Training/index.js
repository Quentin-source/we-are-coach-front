import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CustomNote from '../../Materials/CustomNote';
import CustomLevel from '../../Materials/CustomLevel';

import '../style.scss';

const CardTrainning = ({training, index}) => {
    const history = useHistory();
    const loading = useSelector((state)=> state.home.loading);
    
    const {picture, level, name, description, sport, published_at} = training;
    const handleCardClick = (event) => {
        history.push(`/Entrainement/${training.id}`);
    };

    return (
        <Card 
            onClick={handleCardClick}
            className = {`training-card ${!loading && 'animate__zoomIn animate__animated'}`} 
            style={{
                animationDelay : `${index / 6}s`,
                animationDuration : '0.3s',
            }}   
            sx={{ maxWidth: 345 }}
        >

            <CardMedia
                component="img"
                height="140"
                image={picture}
                alt="green iguana"
            />
            <CardContent>
                <Typography className="training-card-category" gutterBottom variant="h10" component="div">
                    {sport.category.name}
                </Typography>
                <Typography gutterBottom variant="h9" component="div">
                    {sport.name}
                </Typography>
                <Typography gutterBottom variant="h7" component="div">
                    {name}
                </Typography>
                <CardContent className= "description-card">
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
                <Typography gutterBottom variant="caption text" component="div">
                    {/* {published_at} */}
                </Typography>
            </CardContent>
            <CardContent className= "footer-card">
                <Typography gutterBottom variant="h10" component="div">
                    <CustomLevel level={level} />
                </Typography>
                <Typography gutterBottom variant="h10" component="div">
                    <CustomNote note={3} />
                </Typography>
            </CardContent>
        </Card>
    );
};

export default CardTrainning;