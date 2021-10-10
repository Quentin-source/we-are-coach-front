import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Avatar, Button, TextField} from '@mui/material';
import { Edit, CheckCircleOutline, HighlightOff } from '@material-ui/icons';
import NavButton from '../Materials/NavButton';
import CustomLevel from '../Materials/CustomLevel';
import EditTrainingPop from "../PopUp/EditTrainingPop";



import './style.scss';

const TrainingDetails = () => {
    const dispatch = useDispatch();
    const { slug } = useParams();
    const editTrainingPopState = useSelector((state)=>(state.training.editTrainingPop));
    const commentPopState = useSelector((state) =>(state.training.commentPop));
    
    const commentInput = useSelector((state) =>(state.training.commentInput));
    const isConnected = useSelector((state) => state.home.connected);
    const comments = useSelector((state)=> state.training.comments);

    const name = useSelector((state)=> state.training.name);
    const sport = useSelector((state)=> state.training.sport);
    const description = useSelector((state)=> state.training.description);
    const level = useSelector((state)=> state.training.level);
    const id = useSelector((state)=> state.training.id);
    const picture = useSelector((state)=>state.training.picture);
    const pseudo = useSelector((state)=>state.training.userPseudo);

    

    useEffect(()=>{
        dispatch({type:'LOADING_ON'});
        dispatch({type : 'CLEAN_MENU'});
        dispatch({
            type:'FETCH_TRAINING_DETAILS',
            slug: slug,    
        }); 
    },[]);
    

    const handleEditTraining = (event) => {

        dispatch({type:'TOGGLE_EDIT_TRAINING'})
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
            workout : id,
        });
        dispatch({type:'TOGGLE_COMMENT'});
       

    }

    return (
        <main className="main-content">
            <h2 className="main-content-title" >
                    Détails d'un entrainement 
            </h2>

            
            
            <section className="training-details">
                <div className="training-details-group-block"> 
                    <div className="training-details-header">
                        <h3 className="training-details-title">{name}</h3>      
                        <span> Niveau : <CustomLevel level={level}/></span>
                    </div>
                    <div className="training-details-picture">
                        <img  alt="Nom Prénom"
                            src={picture}
                        />
                        {isConnected && 
                            <>
                                <NavButton  
                                    content={editTrainingPopState ? 
                                        <CheckCircleOutline /> 
                                        : 
                                        <Edit />
                                    } 
                                    handleClick={handleEditTraining}
                                    className={!editTrainingPopState ? 'training-details-button-edit navbar-button': 'training-details-button-edit navbar-button navbar-button--open'}
                                />
                                <EditTrainingPop />
                            </>
                        }
                        <h4 className="training-details-category" >Catégorie</h4>
                    </div>
                    <div className="training-details-description">
                        
                        
                        <h5 className='training-details-sport'> {sport}</h5>
                        <p>{description}</p>

                    </div>  
                </div>    
                <div className="training-details-group-aside">
                    <div className="training-details-coach">
                        <Avatar/>
                        <p>{pseudo}</p>
                       
                    </div>                  
                    {isConnected && <div className="training-details-group-button">
                        <Button 
                            classNames={commentPopState?'training-details-button training-details-button--open': 'training-details-button'} 
                            color={commentPopState ? 'secondary' : 'primary'}
                            onClick={handleToggleComment}>
                            {commentPopState? 'FERMER': 'COMMENTER'}
                        </Button> 
                        <Button>Noter</Button> 
                    </div>}
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
                    content={<HighlightOff /> } 
                    handleClick={handleSubmitComment}
                    className={!commentPopState ? 'training-new-comment-button navbar-button': 'training-new-comment-button navbar-button navbar-button--open'}
                />
            </div>

            <section className="training-comments">
            
               

                {comments.map((comment)=> (
                    <div key={comment.id} className="training-comments-card">
                        <Avatar />
                        <div className="training-comments-card-content">
                            <p>{comment.comment}</p>
                            <div className="training-comments-card-content-date">publié le 7/09/1987</div>
                        </div>
                    </div>)).reverse()}
                
            </section>

        </main >
    )
}

export default TrainingDetails;


