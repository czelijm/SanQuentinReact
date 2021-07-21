import { useQuery } from '@apollo/client';
import React from 'react';
import { getItemsFromRespone } from '../../queries/social-media/social-media.process-data';
import { GET_SOCIAL_MEDIA } from '../../queries/social-media/social-media.querry';
import SpinnerAbsolute from '../spinner/spinner.component';
import { Anchor, PlatformIcon } from './social-media-bar.styles';

const SocialMediaBar = () => {

    const { loading, error, data } = useQuery(GET_SOCIAL_MEDIA);

    if (loading) return <SpinnerAbsolute/>;
    if (error) {console.log(error); return( <p>Error :(</p>)};
    
    const socials = getItemsFromRespone(data);
    // console.log(getItemsFromRespone(data));

    return(
        <div>
            {socials.map( (s,index)=>(<Anchor key={index} href={s.url} ><PlatformIcon src={s.image} alt="" /></Anchor>))}
        </div>
    )
}

export default SocialMediaBar;