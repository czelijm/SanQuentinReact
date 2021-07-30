import React from 'react';
import {SpinnerDescription, SpinnerDiv, SpinnerOverlay, WaitingGif} from './spinner.styles';
// import {Spinner} from 'react-bootstrap'
import waitGit from '../../assets/wait.gif';

const SpinnerAbsolute = () => (
    <SpinnerOverlay>
        {/* <Spinner animation="grow" variant="light"/> */}
        <img src={waitGit} alt=''/>
        <h2>Loading...</h2>
    </SpinnerOverlay>
)

export const SpinnerAdjustable = ({width=320,height=320}) => (
    <SpinnerDiv>
        <WaitingGif style={{width,height}}  src={waitGit} alt=''/>
        <SpinnerDescription>Loading...</SpinnerDescription>
    </SpinnerDiv>
)

export default SpinnerAbsolute;