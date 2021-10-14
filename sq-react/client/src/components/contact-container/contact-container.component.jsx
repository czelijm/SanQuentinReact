import { useQuery } from '@apollo/client';
import React from 'react';
import { Redirect } from 'react-router-dom';
import { getAllContactsDataFromResponse, prepareContactsArray } from '../../queries/contact/contact.process-data';
import { GET_ALL_CONTACT } from '../../queries/contact/contact.query';
import ContactOverview from '../contact-overview/contact-overview.component';
import SpinnerAbsolute from '../spinner/spinner.component';
import { ContactContainerStyled } from './contact-container.styles';

const ContactContainer = () => {
    
    const { loading, error, data } = useQuery(GET_ALL_CONTACT);

    if (loading) return <SpinnerAbsolute/>;
    if (error) return <Redirect to={'/404'}/>
    
    
    const contacts = prepareContactsArray(getAllContactsDataFromResponse(data));
    // console.log(data);
    // console.log(contacts);


    return(
        <ContactContainerStyled>    
            {<ContactOverview contacts={contacts}/>}
        </ContactContainerStyled>
)}

export default ContactContainer;

