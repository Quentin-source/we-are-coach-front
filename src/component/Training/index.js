
import avatar from '../../assets/images/avatar_Maeva.jpg';
import './style.scss';
import run from '../../assets/images/run.jpg'
import pool from '../../assets/images/pool.jpg'
import tennis from '../../assets/images/tennis.jpg'
import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const Training = () => {
    return (
        <div className= 'trainnings'>
            <Card className= 'card'>
                <Image className= 'card-image' src={run}  />
                <Card.Content className= 'card-content'>
                    <Card.Header className= 'card-header'>Categorie</Card.Header>
                    <Card.Meta>
                        <span className='trainningName'>nom de l'entrainement</span>
                    </Card.Meta>
                    <Card.Description className= 'card-description'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacinia eros lorem, in ultrices dui pretium scelerisque. Nam et scelerisque ligula, at luctus nisl. Praesent quis nisi quis libero malesuada cursus. Nunc ac orci non nisi malesuada volutpat eu vel metus. Proin mi magna, convallis non auctor vel, lobortis eu leo. Praesent tincidunt aliquet fringilla. Praesent maximus libero ut lectus condimentum luctus. Proin viverra sapien et odio ullamcorper aliquet. Nam eu sem sollicitudin, ultrices sem sed, ullamcorper magna.
                    Suspendisse efficitur ligula lectus, at maximus mi vehicula at. Curabitur quis mi dui. Nulla venenatis dapibus metus. Sed in nunc sodales, rutrum.
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
            <Card className= 'card'>
                <Image className= 'card-image' src={pool}  />
                <Card.Content className= 'card-content'>
                    <Card.Header className= 'card-header'>Categorie</Card.Header>
                    <Card.Meta>
                        <span className='trainningName'>nom de l'entrainement</span>
                    </Card.Meta>
                    <Card.Description className= 'card-description'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacinia eros lorem, in ultrices dui pretium scelerisque. Nam et scelerisque ligula, at luctus nisl. Praesent quis nisi quis libero malesuada cursus. Nunc ac orci non nisi malesuada volutpat eu vel metus. Proin mi magna, convallis non auctor vel, lobortis eu leo. Praesent tincidunt aliquet fringilla. Praesent maximus libero ut lectus condimentum luctus. Proin viverra sapien et odio ullamcorper aliquet. Nam eu sem sollicitudin, ultrices sem sed, ullamcorper magna.
                    Suspendisse efficitur ligula lectus, at maximus mi vehicula at. Curabitur quis mi dui. Nulla venenatis dapibus metus. Sed in nunc sodales, rutrum.
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
            <Card className= 'card'>
                <Image className= 'card-image' src={tennis}  />
                <Card.Content className= 'card-content'>
                    <Card.Header className= 'card-header'>Categorie</Card.Header>
                    <Card.Meta>
                        <span className='trainningName'>nom de l'entrainement</span>
                    </Card.Meta>
                    <Card.Description className= 'card-description'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacinia eros lorem, in ultrices dui pretium scelerisque. Nam et scelerisque ligula, at luctus nisl. Praesent quis nisi quis libero malesuada cursus. Nunc ac orci non nisi malesuada volutpat eu vel metus. Proin mi magna, convallis non auctor vel, lobortis eu leo. Praesent tincidunt aliquet fringilla. Praesent maximus libero ut lectus condimentum luctus. Proin viverra sapien et odio ullamcorper aliquet. Nam eu sem sollicitudin, ultrices sem sed, ullamcorper magna.
                    Suspendisse efficitur ligula lectus, at maximus mi vehicula at. Curabitur quis mi dui. Nulla venenatis dapibus metus. Sed in nunc sodales, rutrum.
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
        </div>
    );
};

export default Training;