import React from 'react';

import {Anchor, ContactDescriptionElement, ContactImage, ContactsOverviewItemComponent, ContactTitle, Icon, InfoDiv, InsideDiv, SocialMediaDiv} from './contact-item.styles'


const ContactItem = ({contact:{title,image,descriptionArray,socialMediaPhotoArray,socialMediaLinkArray}}) => (
    <ContactsOverviewItemComponent>
        
        
        <InsideDiv>
            {image?<ContactImage src={image}/>:<div></div>}
            <InfoDiv>
                <ContactTitle>{title}</ContactTitle>
                {descriptionArray.map((d,index)=><ContactDescriptionElement key={index}>{d}</ContactDescriptionElement>)}
                <SocialMediaDiv>
                    {socialMediaPhotoArray.map((m,i)=><Anchor href={socialMediaLinkArray[i]} key={i}><Icon src={m}/></Anchor>)}
                </SocialMediaDiv>
            </InfoDiv>
        </InsideDiv>
    </ContactsOverviewItemComponent>
);

export default ContactItem;