import React from 'react'
import {Carousel} from 'react-bootstrap'

import BandItem from '../band-overview-item/band-overview-item.component';

import {useWindowSize} from '../../hooks/useWindowSize/useWindowSize'

import {BandOverviewComponent,MobileImage,MobileTitle,MobileCaptionDiv,MobileDescription} from './band-overview.styles'



const BandOverview = ({band}) => {

    // const [x,y,isMobile] = useWindowSize();
    const [,,isMobile] = useWindowSize();

    console.log(isMobile);

    return(
        <BandOverviewComponent>

            {isMobile?
                <Carousel>
                {
                    band.map((m, index)=>
                    <Carousel.Item key={index} interval={5000}>
                        <MobileImage
                        // className="d-block w-100 h-75"
                            src={m.innerImage}
                            alt="Band Memeber"
                        />
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <Carousel.Caption>
                            <MobileCaptionDiv>
                                <MobileTitle>{m.title}</MobileTitle>
                                <MobileDescription>{m.descriptionArray}</MobileDescription>
                            </MobileCaptionDiv>
                            <br/>
                        </Carousel.Caption>
                    </Carousel.Item>
                )}
                </Carousel>
            :
                band.map((m,index)=><BandItem key={index} bandMember={m}/>)
            }
        
        </BandOverviewComponent>
    )
}

export default BandOverview;