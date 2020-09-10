import React, {ReactNode} from 'react';
import {Bgprops, HeroContainer } from './styles';


interface HeroProps extends Bgprops {
    element? : ReactNode
}

const Hero = ({element , background }: HeroProps) => {
  return(
      <HeroContainer background={background}>
        {element}
       </HeroContainer> 
  );
}

export default Hero;