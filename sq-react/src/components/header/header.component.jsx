import React from 'react';
//import {HeaderContainer, LogoContainer, OptionsContainer, OptionLink} from './header.styles';

import {Navbar, Nav} from 'react-bootstrap';

import { ReactComponent as Logo  } from '../../assets/logo.svg';

import 'bootstrap/dist/css/bootstrap.min.css';  

// const HeaderComponentTest = () => (
//     <HeaderContainer>
//         <LogoContainer to='/'>
//             <Logo className='logo' style ={{width:'100%', height:'100%'}}/>
//         </LogoContainer>
//         <OptionsContainer>
//             <OptionLink to='news'>Newsy</OptionLink>
//             <OptionLink to='gigs'>Koncerty</OptionLink>
//             <OptionLink to='band'>Zespół</OptionLink>
//         </OptionsContainer>

//     </HeaderContainer>
// )

const HeaderComponent = () => (
    <Navbar style={{color:'white'}} variant='dark' expand="lg">
        <Navbar.Brand href="/"> <Logo className='logo'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="news">Newsy</Nav.Link>
                <Nav.Link href="gigs">Koncerty</Nav.Link>
                <Nav.Link href="band">Zespół</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)

export default HeaderComponent;