import { styled } from  '@mui/material';

export const HeaderContainer = styled('header')`
    color: blue; 
`;

export const Logo = styled ('img')`
width: 100px;
display: flex;
justify-content: center;
border: 1px solid;
padding: ${({theme}) => theme.spacing(2)};
`;


