import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Avatar, Button, TextField} from '@mui/material';
import { Edit, CheckCircleOutline } from '@material-ui/icons';
import NavButton from '../Materials/NavButton';
import CustomLevel from '../Materials/CustomLevel';

import './style.scss';

const TrainingDetails = () => {
    const dispatch = useDispatch();
    const { slug } = useParams();
    const editState = useSelector((state)=>(state.training.editState));
    const commentPopState = useSelector((state) =>(state.training.commentPop));
    const content = useSelector((state)=>(state.training.content));
    const commentInput = useSelector((state) =>(state.training.commentInput));

    

    useEffect(()=>{
        dispatch({type:'LOADING_ON'});
        dispatch({
            type:'FETCH_TRAINING_DETAILS',
            slug: slug,    
        }); 
    },[]);
    
    const handleEdit = (event, target) => {
        dispatch({
            type:'TOGGLE_EDIT',
            target: target,
            value: content[target],
        })
    };

    const handleChangeComment = (event) => {
        dispatch({
            type:'CHANGE_COMMENT',
            value : event.target.value,    
        })

    }

    const handleToggleComment = (event) =>{
        dispatch({type:'TOGGLE_COMMENT'});
    };

    const handleSubmitComment = (event) => {
        dispatch({
            type:'SUBMIT_COMMENT',
            comment : commentInput,
            workout : content.id,
        })
    }

   


    return (
        <main className="main-content">
            <h2 className="main-content-title" >
                    Détails d'un entrainement 
            </h2>

            
            
            <section className="training-details">
                <div className="training-details-group-block"> 
                    <div className="training-details-header">
                        <h3 className="training-details-title">{content.name}</h3>      
                        <span> Niveau : <CustomLevel level={content.level}/></span>
                    </div>
                    <div className="training-details-picture">
                        <img  alt="Nom Prénom"
                            src={content.picture}
                        />
                        <NavButton  
                            content={editState.name ? 
                                <CheckCircleOutline /> 
                                : 
                                <Edit />
                            } 
                            handleClick={handleEdit}
                            className={!editState ? 'training-details-button-edit navbar-button': 'training-details-button-edit navbar-button navbar-button--open'}
                        />
                        <h4 className="training-details-category" > {content.hasOwnProperty('sport') && content.sport.category.name}</h4>
                    </div>
                    <div className="training-details-description">
                        
                        
                        <h5 className='training-details-sport'> {content.hasOwnProperty('sport') && content.sport.name}</h5>
                        <p>{content.description}</p>

                    </div>  
                </div>    
                <div className="training-details-group-aside">
                    <div className="training-details-coach">
                        <Avatar/>
                        <p>{content.hasOwnProperty('user')&&content.user.pseudo}</p>
                       
                    </div>                  
                    <div className="training-details-group-button">
                        <Button onClick={handleToggleComment}>Commenter</Button> 
                        <Button>Noter</Button> 
                    </div>
                </div>
            </section>  
            

            <div className={commentPopState? 'training-new-comment training-new-comment--open' :  'training-new-comment training-new-comment--close'}>
                <TextField
                    fullWidth
                    id="outlined-multiline-static"
                    label="Commentaire"
                    name="comment"
                    color="secondary"
                    value={commentInput}
                    onChange={handleChangeComment}
                    onBlur={handleToggleComment}
                    variant="standard"
                    multiline
                    rows={2}
                />

                <NavButton  
                    content={editState.name ? 
                        <CheckCircleOutline /> 
                        : 
                        <Edit />
                    } 
                    handleClick={handleSubmitComment}
                    className={!editState ? 'training-new-comment-button navbar-button': 'training-new-comment-button navbar-button navbar-button--open'}
                />
            </div>

            <section className="training-comments">
            
               

                {content.hasOwnProperty('comment') && content.comment.map((comment)=> (
                    <div className="training-comments-card">
                        <Avatar />
                        <div className="training-comments-card-content">
                            <p>{comment.comment}</p>
                            <div className="training-comments-card-content-date">publié le 7/09/1987</div>
                        </div>
                    </div>))}
                
            </section>

        </main >
    )
}

export default TrainingDetails;


