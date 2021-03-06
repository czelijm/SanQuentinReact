import React from 'react';
import {useLocation } from "react-router-dom";

import {Row, Col} from 'react-bootstrap';

import { GigsOverviewItemComponent,GigTitle,GigImage,GigDescriptionDiv,GigDescriptionElement,ImageDiv,DetailsButton, ButtonDiv, ColImage, RowStyled, BackgroundImage } from './gigs-overview-item.styles';
import metalShelf from '../../assets/metal-shelf.jpg';

const GigItem = ({gig:{id,title,image,descriptionArray}}) => {
    
    // const history = useHistory();
    const {pathname} =  useLocation();


    // function handleClick(path) {
    //     history.push(path);
    // }

    return (
        <GigsOverviewItemComponent >
            <BackgroundImage src={metalShelf}/>
            <RowStyled>
            <Col xs={12} lg={{ span: 2, offset: 0 }}>
                <ImageDiv>
                    {image?<GigImage src={image}/>:<div></div>}
                </ImageDiv>
            </Col>
            <Col xs={12} lg={{ span: 2, offset: 0 }}>
                <GigTitle>{title}</GigTitle>
            </Col>
                {descriptionArray.slice(0,-1).map((d,index)=>
                    <ColImage  key={index} xs={{ span: 4, offset: 0 }} lg={{ span: 2, offset: 0 }}>
                        <GigDescriptionDiv>
                            <GigDescriptionElement>{d}</GigDescriptionElement>
                        </GigDescriptionDiv>
                    </ColImage>
                )}
                <Col xs={{ span: 12, offset: 0 }} lg={{ span: 2, offset: 0 }}>
                    <ButtonDiv>
                        <DetailsButton to={`${pathname}/${id}`}>Obczaj to!</DetailsButton>
                    </ButtonDiv>
                </Col>
            </RowStyled>
            {/* <Row>
                <Col xs={{ span: 12, offset: 0 }} lg={{ span: 3, offset: 8 }}>
                    <DetailsButton to={`${pathname}/${id}`}>Obczaj to!</DetailsButton>
                </Col>
            </Row>     */}
        </GigsOverviewItemComponent>
    )
}

export default GigItem;