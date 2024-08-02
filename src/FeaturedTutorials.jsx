import React from 'react'
import ArticleItem from './ArticleItem'
import TutorialList from './TutorialList'
import './FeaturedArticles.css'
import { Button } from 'semantic-ui-react';

function articleComponent (article, index){
    return <ArticleItem
    imageSrc = {article.imageSrc}
    title={article.title}
    desc={article.desc}
    rating={article.rating}
    author={article.author}
/>
}

const FeaturedArticles = (props) =>
{
    return <div>
        <div className='heading'>
            {props.title}   
        </div>
      
        <div className='article-container'>
            {TutorialList.map(articleComponent)}
        </div>

        <div className='Buttons'>
            <Button >View More!</Button>
        </div>

        
    </div>
}

export default FeaturedArticles