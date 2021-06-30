import React from 'react';
import {useLocation } from "react-router-dom";

import {Row, Col} from 'react-bootstrap';

import { GigsOverviewItemComponent,GigTitle,GigImage,GigDescriptionDiv,GigDescriptionElement,ImageDiv,DetailsButton, ButtonDiv } from './gigs-overview-item.styles';


const GigItem = ({gig:{id,title,image,descriptionArray}}) => {
    
    // const history = useHistory();
    const {pathname} =  useLocation();


    // function handleClick(path) {
    //     history.push(path);
    // }

    return (
        <GigsOverviewItemComponent >
            <Row>
            <Col xs={12} lg={{ span: 2, offset: 0 }}>
                <ImageDiv>
                    {image?<GigImage src={image}/>:<div></div>}
                </ImageDiv>
            </Col>
            <Col xs={12} lg={{ span: 2, offset: 0 }}>
                <GigTitle>{title}</GigTitle>
            </Col>
                {descriptionArray.slice(0,-2).map((d,index)=>
                    <Col  key={index} xs={{ span: 4, offset: 0 }} lg={{ span: 2, offset: 0 }}>
                        <GigDescriptionDiv>
                            <GigDescriptionElement>{d}</GigDescriptionElement>
                        </GigDescriptionDiv>
                    </Col>
                )}
                <Col xs={{ span: 12, offset: 0 }} lg={{ span: 2, offset: 0 }}>
                    <ButtonDiv>
                        <DetailsButton to={`${pathname}/${id}`}>Obczaj to!</DetailsButton>
                    </ButtonDiv>
                </Col>
            </Row>
            {/* <Row>
                <Col xs={{ span: 12, offset: 0 }} lg={{ span: 3, offset: 8 }}>
                    <DetailsButton to={`${pathname}/${id}`}>Obczaj to!</DetailsButton>
                </Col>
            </Row>     */}
        </GigsOverviewItemComponent>
    )
}

export default GigItem;