import React, { ReactNode } from 'react';
import {StyledButton} from './styles/index';

type MyComponentProps = React.HTMLAttributes<HTMLElement>;

export default function Button({children, ...rest}: MyComponentProps){
    return(
        <StyledButton {...rest}>{children}</StyledButton>
    )
}