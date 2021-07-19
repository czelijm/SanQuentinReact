import React from 'react';
import {SpinnerOverlay} from './spinner.styles';
import {Spinner} from 'react-bootstrap'
import waitGit from '../../assets/wait.gif';

const SpinnerAbsolute = () => (
    <SpinnerOverlay>
        {/* <Spinner animation="grow" variant="light"/> */}
        <img src={waitGit} alt=''/>
        <h2>Loading...</h2>
    </SpinnerOverlay>
)

export default SpinnerAbsolute;