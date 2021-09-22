
import avatar from '../../assets/images/avatar_Maeva.jpg';
import { Icon,Card, Image } from 'semantic-ui-react'

const Training = () => {
    return (
        <Card.Group>
            <Card>
            
                <Card.Content>
                    <Image
                        floated='right'
                        size='mini'
                        src={avatar}
                    />
                    <Card.Header textAlign= "center">Categorie</Card.Header>
                    <Card.Meta>
                        <span className='sportName'>Nom de l'entrainement</span>
                    </Card.Meta>
                    <Card.Description>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo quod non dolores iure veniam doloremque unde quam minus, dolorum at voluptatum corporis tenetur assumenda vero aliquid laudantium similique blanditiis sed.
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <a>
                        <Icon name='user' />
                            difficulté
                    </a>
                    <a>publié le</a>
                </Card.Content>
            </Card>

            <Card>
        
                <Card.Content>
                    <Image
                        floated='right'
                        size='mini'
                        src={avatar}
                    />
                    <Card.Header textAlign= "center">Categorie</Card.Header>
                    <Card.Meta>
                        <span className='sportName'>Nom de l'entrainement</span>
                    </Card.Meta>
                    <Card.Description>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo quod non dolores iure veniam doloremque unde quam minus, dolorum at voluptatum corporis tenetur assumenda vero aliquid laudantium similique blanditiis sed.
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <a>
                        <Icon name='user' />
                        difficulté
                    </a>
                    <a>publié le</a>
                </Card.Content>
            </Card>

            <Card>
                
                <Card.Content>
                    <Image
                        floated='right'
                        size='mini'
                        src={avatar}
                    />
                    <Card.Header textAlign= "center">Categorie</Card.Header>
                    <Card.Meta>
                        <span className='sportName'>Nom de l'entrainement</span>
                    </Card.Meta>
                    <Card.Description>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo quod non dolores iure veniam doloremque unde quam minus, dolorum at voluptatum corporis tenetur assumenda vero aliquid laudantium similique blanditiis sed.
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
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

export default Training;