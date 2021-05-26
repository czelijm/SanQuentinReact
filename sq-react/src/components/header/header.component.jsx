import React from 'react';
import {HeaderContainer, LogoContainer, OptionsContainer, OptionLink} from './header.styles'

import { ReactComponent as Logo  } from '../../assets/logo.svg'

const HeaderComponent = () => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo className='logo' style ={{width:'100%', height:'100%'}}/>
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='news'>Newsy</OptionLink>
            <OptionLink to='gigs'>Koncerty</OptionLink>
        </OptionsContainer>

    </HeaderContainer>
)

export default HeaderComponent;