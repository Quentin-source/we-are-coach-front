
import avatar from '../../assets/images/avatar_Maeva.jpg';
import { Icon,Card, Image } from 'semantic-ui-react'
import './style.scss';
import run from '../../assets/images/run.jpg'

const Training = () => {
    return (
        <div className= "card-group">
            <Card className= "card">
            
                <Card.Content className= "content-header">
                    <Card.Header 
                        className= "header-category" 
                        textAlign= "center">
                        <img src={run}  alt="Peole running" />
                        Categorie
                    </Card.Header>
                </Card.Content>
                <Card.Content className= "content-meta">
                    <Card.Meta className= "meta">
                        <span className='sportName'>Nom de l'entrainement</span>
                    </Card.Meta>
                    <Card.Description>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo quod non dolores iure veniam doloremque unde quam minus, dolorum at voluptatum corporis tenetur assumenda vero aliquid laudantium similique blanditiis sed.
                    </Card.Description>
                </Card.Content>
                <Card.Content extra className="content-extra">
                    <a className= "content-extra__content-extra-a">
                        <Icon name='user' />
                            difficulté
                    </a>
                    <a>publié le</a>
                </Card.Content>
            </Card>

            <Card className= "card">
            
                <Card.Content className= "content-header">
                    <Card.Header 
                        className= "header-category" 
                        textAlign= "center">
                            Categorie
                    </Card.Header>
                </Card.Content>
                <Card.Content className= "content-meta">
                    <Card.Meta className= "meta">
                        <span className='sportName'>Nom de l'entrainement</span>
                    </Card.Meta>
                    <Card.Description>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo quod non dolores iure veniam doloremque unde quam minus, dolorum at voluptatum corporis tenetur assumenda vero aliquid laudantium similique blanditiis sed.
                    </Card.Description>
                </Card.Content>
                <Card.Content extra className="content-extra">
                    <a className= "content-extra__content-extra-a">
                        <Icon name='user' />
                            difficulté
                    </a>
                    <a>publié le</a>
                </Card.Content>
            </Card>
            <Card className= "card">
            
                <Card.Content className= "content-header">
                    <Card.Header 
                        className= "header-category" 
                        textAlign= "center">
                            Categorie
                    </Card.Header>
                </Card.Content>
                <Card.Content className= "content-meta">
                    <Card.Meta className= "meta">
                        <span className='sportName'>Nom de l'entrainement</span>
                    </Card.Meta>
                    <Card.Description>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo quod non dolores iure veniam doloremque unde quam minus, dolorum at voluptatum corporis tenetur assumenda vero aliquid laudantium similique blanditiis sed.
                    </Card.Description>
                </Card.Content>
                <Card.Content extra className="content-extra">
                    <a className= "content-extra__content-extra-a">
                        <Icon name='user' />
                            difficulté
                    </a>
                    <a>publié le</a>
                </Card.Content>
            </Card>
        </div>
    );
};

export default Training;