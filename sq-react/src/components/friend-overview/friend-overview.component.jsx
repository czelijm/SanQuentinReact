import React from 'react';
import Carousel from 'react-multi-carousel';

import { FriendsOverviewComponentStyled } from './friend-overview.styles';
import "react-multi-carousel/lib/styles.css";
import FriendCard from '../friend-card/friend-card.component';

const FriendsOverview = ({items}) => {


    const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
    };

    return(
        <FriendsOverviewComponentStyled>
            <Carousel
                swipeable={true}
                draggable={false}
                showDots={false}
                responsive={responsive}
                ssr={false} // means to render carousel on server-side.
                infinite={true}
                // autoPlay={this.props.deviceType !== "mobile" ? true : false}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                // removeArrowOnDeviceType={["tablet", "mobile"]}
                // deviceType={this.props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                {items.map(({id, image, title, description})=> <FriendCard key={id}
                    description={description}
                    headline={title}
                    image={image}
                />)}
            </Carousel>
        </FriendsOverviewComponentStyled>
    )
}

export default FriendsOverview;