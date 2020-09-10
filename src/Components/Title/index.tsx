import React from 'react';

import { TitleContainer  } from './styles';

interface TitleProps {
    text : string
}


const Title = ({text} :TitleProps) => {
  return(
        <TitleContainer >
            <h2>{text}</h2>
        </TitleContainer>
  );
}

export default Title;