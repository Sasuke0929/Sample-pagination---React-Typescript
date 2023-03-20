import React from 'react';
import {StyledTable, StyledTr, StyledTd, StyledTh} from './styles/index';

type MyComponentProps = React.HTMLAttributes<HTMLElement>;

export default function Table({children, ...rest}: MyComponentProps){
    return(
        <StyledTable {...rest}>{children}</StyledTable>
    )
}

Table.Tr = ({children, ...rest}: MyComponentProps) => {
    return(
        <StyledTr {...rest}>
            {children}
        </StyledTr>
    )
}

Table.Th = ({children, ...rest}: MyComponentProps) => {
    return(
        <StyledTh {...rest}>
            {children}
        </StyledTh>
    )
}

Table.Td = ({children, ...rest}: MyComponentProps) => {
    return(
        <StyledTd {...rest}>
            {children}
        </StyledTd>
    )
}