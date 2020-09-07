import React, {ReactNode} from 'react';
import {Bgprops, HeroContainer } from './styles';


interface HeroProps extends Bgprops {
    element? : ReactNode
}

const Hero: React.FC<HeroProps> = (props) => {
  return(
      <HeroContainer background={props.background}>
        {props.element}
       </HeroContainer> 
  );
}

export default Hero;