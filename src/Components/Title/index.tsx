import React from 'react';

import { TitleContainer  } from './styles';

interface TitleProps {
    text : string
}


const Title: React.FC<TitleProps> = ({text}) => {
  return(
        <TitleContainer >
            <h2>{text}</h2>
        </TitleContainer>
  );
}

export default Title;