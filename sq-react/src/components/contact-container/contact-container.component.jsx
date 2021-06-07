import { useQuery } from '@apollo/client';
import React from 'react';
import { GET_ALL_CONTACT } from '../../queries/contact/contact.query';
import SpinnerAbsolute from '../spinner/spinner.component';
import { ContactContainerStyled } from './contact-container.styles';

const ContactContainer = () => {
    
    const { loading, error, data } = useQuery(GET_ALL_CONTACT);

    if (loading) return <SpinnerAbsolute/>;
    if (error) {console.log(error); return( <p>Error :(</p>)};
    
    console.log(data);

    return(
        <ContactContainerStyled>
            Credentials
        </ContactContainerStyled>
)}

export default ContactContainer;

