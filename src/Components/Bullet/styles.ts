import styled from 'styled-components';


export interface BulletBg {
    bgcolor : '#45A3AB' | '#FF5A5F'
}


export const BulletContainer = styled.div<BulletBg>`

        background-color : ${props => props.bgcolor};
        width : 50px;
        height : 50px;
        display : flex;
        justify-content: center;
        align-items : center;
        color : var(--white);
        border-radius : 50%;
        font-size : 1.8rem;
        margin-bottom : 1.5rem;
  
`;
