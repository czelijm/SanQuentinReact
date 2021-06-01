import React from 'react';
import {Row,Col,Container} from 'react-bootstrap';
import {Link, useLocation} from 'react-router-dom';
import Button from '../button/button.component'

import {NewsItemContainer,NewsTitle,NewsImage, NewsDetailsButton,NewsDetailsTitleBox, NewsDetailsRow,NewsDetailsImageBox,NewsDetailsButtonBox} from './news-item.styles'

const NewsItem = ({item:{title,image,id}}) => {
    
    // {item:{title,image,id}}
    // const {title,image,id} = props.item;

    const {pathname} = useLocation();

    // console.log(pathname);

    return(
    <NewsItemContainer>
        {/* <Card style={{ width: '18rem', backgroundColor: 'black', display: 'flex' }}>
            <Card.Img src={image} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                {/* <Card.Text>
                </Card.Text> */}
                {/* <Button variant="primary">Go somewhere</Button> */}
            {/* </Card.Body> */}
        {/* </Card> */}
        {/* <Container> */}
            <NewsDetailsRow>
                <NewsDetailsImageBox xs={12} lg={4}>
                {
                    image? <NewsImage src={image} alt='img'/> :<div></div>
                }
                </NewsDetailsImageBox>
                <NewsDetailsTitleBox xs={12} lg={4}>
                    <NewsTitle>{title}</NewsTitle>
                    {/* <NewsDetailsButton to={`${pathname}/${id}`}>Obczaj to!</NewsDetailsButton> */}
                </NewsDetailsTitleBox>
                <NewsDetailsButtonBox xs={12} lg={4}>
                    <NewsDetailsButton to={`${pathname}/${id}`}>Obczaj to!</NewsDetailsButton>
                </NewsDetailsButtonBox>
                {/* {match} */}
            </NewsDetailsRow>
        {/* </Container> */}

        {/* <p>{title}</p>
        {
            image? <img src={image} alt='img'/>:<div></div>
        } */}
    </NewsItemContainer>
)}

export default NewsItem