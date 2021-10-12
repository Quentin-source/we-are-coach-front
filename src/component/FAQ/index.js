import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { CardContent } from '@mui/material';

import './style.scss';

const FAQ = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div>
            <Typography variant="h2" color= "primary" align="center">FAQ </Typography>

            <CardContent style={{maxWidth:800, margin:"0 auto", padding:"20px 5px"}}>
                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3bh-content"
                        id="panel3bh-header"
                    >
                        <Typography sx={{ width: '33%', flexShrink: 0 }}>
                            Question 1
                        </Typography>
                        <Typography sx={{ color: 'text.secondary' }}>
                        Je suis inscris! Que faire à présent ?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                        Bienvenue ! Comme tout forum, We Are Coach possède ses propres règles qu'il faut avoir lu au moins une fois et bien évidemment respecter sous peine de sanction si vous entravez à son bon fonctionnement. Rassurez-vous cependant, le forum et son staff se veulent très tolérants, mais le respect mutuel est quelque chose auquel nous tenons ! [Lire le CGU du forum!]
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography sx={{ width: '33%', flexShrink: 0 }}>
                            Question 2
                        </Typography>
                        <Typography sx={{ color: 'text.secondary' }}>Quel niveau doit-je avoir en arrivant sur le site ?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Aucun. Débutant ou confirmé, vous êtes les bienvenues pour partager vos pratiques sportives, donner des    conseils et en recevoir.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2bh-content"
                        id="panel2bh-header"
                    >
                        <Typography sx={{ width: '33%', flexShrink: 0 }}>Question 3</Typography>
                        <Typography sx={{ color: 'text.secondary' }}>
                            A qui dois-je m'adresser en cas de problèmes ?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                        En cas de problèmes, utiliser le formulaire de contact. Nos administrateurs ou modérateurs, vous répondront dans les plus bref délais.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel4bh-content"
                        id="panel4bh-header"
                    >
                        <Typography sx={{ width: '33%', flexShrink: 0 }}>Question 4</Typography>
                        <Typography sx={{ color: 'text.secondary' }}>
                        Puis-je poster des Images?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                    Vous pouvez insérer facilement des images à la création de votre profil ou lors de la création d'un entraînement. Pour cela, vous disposez d'une solution depuis l'éditeur : un bouton permettant d'héberger une photo depuis votre appareil (ordinateur ou smartphone). 
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </CardContent>
        </div>
    );
}

export default FAQ;