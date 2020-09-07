import styled from 'styled-components';

export interface Bgcolor {
    background? : string 
}


export const ButtonContainer = styled.button<Bgcolor>`
    
    background : ${props => props.background};
    color : var(--white);
    width : 100%;
    border-radius : 0.8rem;
    display : flex;
    justify-content: center;
    align-items  : center;
    padding : 1rem;
    font-size : 1.6rem;
    border : none;
    margin-top : 1rem;
    &:focus {
        outline : none;
    }
`;
