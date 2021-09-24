import avatar from '../../assets/images/avatar_Maeva.jpg';
import { Icon,Card, Image } from 'semantic-ui-react'
import './style.scss';

const HomeTraining = () => {
    return (
        <Card.Group className= "card-group">
            <Card>
            
                <Card.Content className= "content-header">
                    <Card.Header className= "header-category" textAlign= "center">Categorie
                        <Image
                            floated='right'
                            size= 'mini'
                            src={avatar}
                        />
                    </Card.Header>
                </Card.Content>
                <Card.Content>
                    <Card.Meta className= "meta">
                        <span className='sportName'>Nom de l'entrainement</span>
                    </Card.Meta>
                    <Card.Description>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo quod non dolores iure veniam doloremque unde quam minus, dolorum at voluptatum corporis tenetur assumenda vero aliquid laudantium similique blanditiis sed.
                    </Card.Description>
                </Card.Content>
                <Card.Content extra className="content-extra">
                    <a>
                        <Icon name='user' />
                            difficulté
                    </a>
                    <a>publié le</a>
                </Card.Content>
            </Card>

            <Card>
            
                <Card.Content className= "content-header">
                    <Card.Header className= "header-category" textAlign= "center">Categorie
                        <Image
                            floated='right'
                            size= 'mini'
                            src={avatar}
                        />
                    </Card.Header>
                </Card.Content>
                <Card.Content>
                    <Card.Meta className= "meta">
                        <span className='sportName'>Nom de l'entrainement</span>
                    </Card.Meta>
                    <Card.Description>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo quod non dolores iure veniam doloremque unde quam minus, dolorum at voluptatum corporis tenetur assumenda vero aliquid laudantium similique blanditiis sed.
                    </Card.Description>
                </Card.Content>
                <Card.Content extra className="content-extra">
                    <a>
                        <Icon name='user' />
                            difficulté
                    </a>
                    <a>publié le</a>
                </Card.Content>
            </Card>
            <Card>
            
                <Card.Content className= "content-header">
                    <Card.Header className= "header-category" textAlign= "center">Categorie
                        <Image
                            floated='right'
                            size= 'mini'
                            src={avatar}
                        />
                    </Card.Header>
                </Card.Content>
                <Card.Content>
                    <Card.Meta className= "meta">
                        <span className='sportName'>Nom de l'entrainement</span>
                    </Card.Meta>
                    <Card.Description>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo quod non dolores iure veniam doloremque unde quam minus, dolorum at voluptatum corporis tenetur assumenda vero aliquid laudantium similique blanditiis sed.
                    </Card.Description>
                </Card.Content>
                <Card.Content extra className="content-extra">
                    <a>
                        <Icon name='user' />
                            difficulté
                    </a>
                    <a>publié le</a>
                </Card.Content>
            </Card>
        </Card.Group>
    );
};

export default HomeTraining;