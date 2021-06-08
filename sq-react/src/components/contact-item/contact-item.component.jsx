import React from 'react';

import {ContactImage, ContactsOverviewItemComponent, ContactTitle} from './contact-item.styles'


const ContactItem = ({contact:{title,image,descriptionArray}}) => (
    <ContactsOverviewItemComponent>
        <ContactTitle>{title}</ContactTitle>
        {image?<ContactImage src={image}/>:<div></div>}
        {descriptionArray.map((d,index)=><p key={index}>{d}</p>)}
    </ContactsOverviewItemComponent>
);

export default ContactItem;