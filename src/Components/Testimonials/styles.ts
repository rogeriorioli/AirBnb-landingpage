import styled from 'styled-components';

export const RowContainer = styled.div`

    display : flex;
    align-items  : center;
    justify-content: space-between;
    width : 95%;
    margin : auto;
    padding : 0 4rem;
    .col-5 {
        width : 50%;
        margin-right : 2rem;
        &:last-child {
            margin : 0;
        }
        button {
            max-width : 250px;
            margin : 2rem 0;
        }
        h2 {
            font-size : 3rem;
            margin : 2rem 0;
        }
        p {
            font-size : 1.6rem;
            color : var(--secondary-color);
        }
    }
  
`;
