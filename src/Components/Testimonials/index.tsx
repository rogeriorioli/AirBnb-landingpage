import React from 'react';
import Container from '../Container';
import aspas from '../../assets/images/aspas.svg'
import Button from '../Button';

import {RowProps, RowContainer } from './styles';

interface TestimonialsProps extends RowProps {
  title : string,
  content : string,
  image : string
}


const Testimonials: React.FC<TestimonialsProps> = ({direction, title , content , image}) => {
  return (
    <Container>
      <RowContainer direction={direction}>
        <div className="col-5">
            <img src={image} alt="" srcSet={image} loading="lazy"/>
        </div>
        <div className="col-5">
            <img src={aspas} alt="" srcSet={aspas} loading="lazy"/>
            <div className="text">
              <h2>{title}</h2>
              <p>{content}</p>
              <Button label="Descubra como ser um anfitrião" type="button" background="#45A3AB"/>
            </div>
        </div>
      </RowContainer>
    </Container>
  );
}

export default Testimonials;