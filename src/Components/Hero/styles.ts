import styled from 'styled-components';


export interface Bgprops {
    background : string
}



export const HeroContainer = styled.section<Bgprops>`
        display : flex;
        height : 650px;
        max-width : 1600px;
        margin : 0 auto;
        background : url(${props => props.background});
        background-attachment: scroll;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        align-items: center;
        justify-content: flex-end;
`;
