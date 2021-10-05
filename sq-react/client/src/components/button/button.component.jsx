import React from 'react';
import { useHistory } from 'react-router-dom'
import {ButtonCustom} from './button.styles'

// const Button = (props) => (
//     <ButtonLink to={props.to}>
//         <ButtonContainer>
//             {props.children}
//         </ButtonContainer>
//     </ButtonLink>
// )

const Button = (props) => {
    
    const { push } = useHistory()

    return(

        <ButtonCustom
            type="button"
            onClick={() => push(props.to)}
        >
            {props.children}
        </ButtonCustom>
)}

export default Button;