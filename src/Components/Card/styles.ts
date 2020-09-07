import styled from 'styled-components';

export const CardContainer = styled.div`
    margin-right : 4rem;
    &:last-child {
        margin : 0;
    }
    padding : 0 4rem;
    h2 {
        font-size : 3rem;

    }
    p{
        color : var(--secondary-color);
        font-size : 1.6rem;
        margin : 1rem 0;
    }
`;
