import React from 'react';
import {SpinnerOverlay} from './spinner.styles';
import {Spinner} from 'react-bootstrap'

const SpinnerAbsolute = () => (
    <SpinnerOverlay>
        <Spinner animation="grow" variant="light"/>
    </SpinnerOverlay>
)

export default SpinnerAbsolute;