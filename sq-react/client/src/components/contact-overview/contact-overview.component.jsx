import React from 'react'
import ContactItem from '../contact-item/contact-item.component';

import {ContactOverviewComponent} from './contact-overview.styles'

const ContactOverview = ({contacts}) => {
    return(
        <ContactOverviewComponent>
            {contacts.map((c,index)=><ContactItem key={index} contact={c}/>)}
        </ContactOverviewComponent>
    )
}

export default ContactOverview;