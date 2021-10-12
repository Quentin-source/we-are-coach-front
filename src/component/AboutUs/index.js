import { Typography, Card, CardMedia } from '@mui/material';
import Stack from '@mui/material/Stack';
import quentin from '../../assets/images/jpeg/guillaume.jpg';
import thomas from '../../assets/images/jpeg/thomas.jpg';
import maeva from '../../assets/images/jpeg/maeva.jpg';
import guillaume from '../../assets/images/jpeg/guillaume.jpeg';
import david from '../../assets/images/jpeg/Quentin.jpg';


import './style.scss';


const AboutUs = () => {


    return (

        <div>
            <Typography style={{maxWidth:450, margin:"0 auto", padding:"50px 5px"}} gutterBottom variant="h2" color= "Gray" align="center">Notre Equipe </Typography>

            <Stack direction={{ xs: 'column', sm: 'row' }}
                spacing={{ xs: 4, sm: 5, md: 4 }}
                justifyContent="center"
                alignItems="center">
                <Card>
                    <CardMedia
                        component="img"
                        height="140"
                        image={guillaume}
                        alt="Guillaume"
                    />
                    <Typography color="secondary" variant="body2" style={{maxWidth:310, margin:"0 auto", padding:"10px 2px"}}>
                Guillaume
                    </Typography>
                    <Typography color="primary" variant="h5" style={{maxWidth:310, margin:"0 auto", padding:"20px 5px"}}>
                Product Owner
                    ----
                Developeur Back-End
                    </Typography>
                </Card>
                <Card>
                    <CardMedia
                        component="img"
                        height="140"
                        image={david}
                        alt="David"
                    />
                    <Typography color="secondary" variant="body2" style={{maxWidth:310, margin:"0 auto", padding:"10px 2px"}}>
                David
                    </Typography>
                    <Typography color="primary" variant="h5" style={{maxWidth:310, margin:"0 auto", padding:"20px 5px"}}>
                Lead Dev Back
                    ----
                Developeur Back-End
                    </Typography>
                </Card>
                <Card>
                    <CardMedia
                        component="img"
                        height="140"
                        image={quentin}
                        alt="Quentin"
                    />
                    <Typography color="secondary" variant="body2" style={{maxWidth:310, margin:"0 auto", padding:"10px 2px"}}>
                Quentin
                    </Typography>
                    <Typography color="primary" variant="h5" style={{maxWidth:310, margin:"0 auto", padding:"20px 5px"}}>
                Lead Dev Front
                    ----
                Developeur Front-End
                    </Typography>
                </Card>
                <Card>
                    <CardMedia
                        component="img"
                        height="140"
                        image={maeva}
                        alt="Maëva"
                    />
                    <Typography color="secondary" variant="body2" style={{maxWidth:310, margin:"0 auto", padding:"10px 2px"}}>
                Maëva
                    </Typography>
                    <Typography color="primary" variant="h5" style={{maxWidth:310, margin:"0 auto", padding:"20px 5px"}}>
                Git Master
                    ---------
                Developeuse Front-End
                    </Typography>
                </Card>
                <Card>
                    <CardMedia
                        component="img"
                        height="140"
                        image={thomas}
                        alt="Thomas"
                    />
                    <Typography color="secondary" variant="body2" style={{maxWidth:310, margin:"0 auto", padding:"10px 2px"}}>
                Thomas
                    </Typography>
                    <Typography color="primary" variant="h5" style={{maxWidth:310, margin:"0 auto", padding:"20px 5px"}}>
                Scrum Master
                    ----
                Developeur Front-End
                    </Typography>
                </Card>
            </Stack>
        </div>
    );
}

export default AboutUs;