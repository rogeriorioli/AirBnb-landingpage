import React , { ReactNode} from 'react';

import { CardContainer } from './styles';
interface CardProps{
    title : string,
    content : string,
    line? : ReactNode; 
    steps? : ReactNode;
    children? : ReactNode; 
}


const Card = ({title , content ,line , steps } :CardProps) => {
  return(
      <CardContainer>
          {steps}
          <h2>{title}</h2>
          {line}
         <p>{content}</p>
      </CardContainer>
  );
}

export default Card;