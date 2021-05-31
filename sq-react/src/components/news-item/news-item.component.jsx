import React from 'react';

const NewsItem = ({item:{title,image}}) => (
    <div>
        <p>{title}</p>
        {
            image? <img src={image} alt='img'/>:<div></div>
        }
    </div>
)

export default NewsItem