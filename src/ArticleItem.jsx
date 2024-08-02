import React from 'react';
import './ArticleItem.css'; 
import starIcon from './star.png'; 

const ArticleItem = (props) => {
    return (
        <div className="article-item">
            <div className="titlecontainer">
                <img src={props.imageSrc} alt="Article" />
                
            </div>
    
            <div className="body">
            <h3>{props.title}</h3>
                {props.desc}
            </div>
            
            <div className="end">
                <img src={starIcon} alt="Star" className="star-icon" /> 
                <span className="rating">{props.rating}</span>
                <span className="author">{props.author}</span>
            </div>
        </div>
    );
}

export default ArticleItem;
