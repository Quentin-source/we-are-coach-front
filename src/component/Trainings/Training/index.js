
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';




const CardTrainning = ({image}) => {
    return (
        <Card className= "trainning-card" sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="140"
                image={image}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h10" component="div">
                Catégorie
                </Typography>
                <Typography gutterBottom variant="h9" component="div">
                Nom du sport
                </Typography>
                <Typography gutterBottom variant="h7" component="div">
                Nom de l'entrainement
                </Typography>
                <CardContent className= "description-card">
                    <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except AntarcticaLizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except AntarcticaLizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except AntarcticaLizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
            </CardContent>
            <CardContent className= "footer-card">
                <Typography gutterBottom variant="h10" component="div">
                    difficulté
                </Typography>
                <Typography gutterBottom variant="h10" component="div">
                    Note
                </Typography>
                <Typography gutterBottom variant="h10" component="div">
                    Date
                </Typography>
            </CardContent>
        </Card>
    );
};

export default CardTrainning;