
import { Icon,Card, Image } from 'semantic-ui-react'

const Training = () => {
    return (
    <Card.Group>
        <Card>
            <Image src='' wrapped ui={false} />
            <Card.Content>
            <Card.Header>Categorie</Card.Header>
            <Card.Meta>
                <span className='date'>Publié le</span>
            </Card.Meta>
            <Card.Description>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo quod non dolores iure veniam doloremque unde quam minus, dolorum at voluptatum corporis tenetur assumenda vero aliquid laudantium similique blanditiis sed.
            </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <a>
                    <Icon name='user' />
                    22 Friends
                </a>
            </Card.Content>
        </Card>

    <Card>
        <Image src='' wrapped ui={false} />
        <Card.Content>
        <Card.Header>Categorie</Card.Header>
        <Card.Meta>
            <span className='date'>Publié le</span>
        </Card.Meta>
        <Card.Description>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo quod non dolores iure veniam doloremque unde quam minus, dolorum at voluptatum corporis tenetur assumenda vero aliquid laudantium similique blanditiis sed.
        </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <a>
                <Icon name='user' />
                22 Friends
            </a>
        </Card.Content>
    </Card>
  </Card.Group>
    );
};

export default Training;