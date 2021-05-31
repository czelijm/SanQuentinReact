import React from 'react';
import {Row,Col,Container} from 'react-bootstrap';
import {Link, useLocation} from 'react-router-dom'

import {NewsItemContainer,NewsTitle,NewsImage, NewsDetailsButton,NewsDetailsTitleBox} from './news-item.styles'

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
        <Container>
            <Row>
                <Col xs={12} md={4}>
                {
                    image? <NewsImage src={image} alt='img'/> :<div></div>
                }
                </Col>
                <NewsDetailsTitleBox xs={12} md={4}>
                    <NewsTitle>{title}</NewsTitle>
                    <NewsDetailsButton to={`${pathname}/${id}`}>Obczaj to!</NewsDetailsButton>
                </NewsDetailsTitleBox>
                <Col xs={12} md={6}>
                    <NewsDetailsButton to={`${pathname}/${id}`}>Obczaj to!</NewsDetailsButton>
                </Col>
                {/* {match} */}
            </Row>
        </Container>

        {/* <p>{title}</p>
        {
            image? <img src={image} alt='img'/>:<div></div>
        } */}
    </NewsItemContainer>
)}

export default NewsItem