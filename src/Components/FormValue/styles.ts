import styled from 'styled-components';

export const FormContainer = styled.div`
        background : var(--white);
        border-radius: 2rem;
        padding : 2rem;
        margin : 2rem 8rem 2rem ;
        max-width: 373px;
        h1 {
            color : var(--black);
            line-height: 4rem;
            font-size :3.8rem;
        }
        fieldset {
            margin : 1rem 0;
            border : none;
            label {
                display : block;
                color : var(--primary-color);
                font-size : 1.8rem;
            }
            select, input {
                width : 100%;
                border-radius : 1rem;
                padding : 1rem;
                margin : 0.5rem 0;
                font-size : 2rem;
                border : 1px solid var(--secondary-color);
                &:focus {
                    outline : none;
                }
            }
        }
        .value {
            align-items : center;
            display : flex;
            margin : 1.3rem 0;
            &-total {
                font-weight : 700;
                font-size : 3.2rem;
                color : var(--primary-color);
                margin-right : 2rem;
                width : 50%;
            }
            &-city {
                font-size : 2rem;
                color : var(--secondary-color);
                text-align : center;
                width : 50%;
                span {
                    display : block;
                }
            }
        }
`;
