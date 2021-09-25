
import './style.scss';

const CategoryCard = ({title,text}) => {
    
    return (
        <div className="category-card">
            <h2 className="category-card-title">{title}</h2>
            <p className="category-card-text">{text}</p>
        </div>
        // <div className="dot">
    )
}

export default CategoryCard;
