import React from 'react';
import Container from '../Container';
import paulo from '../../assets/images/testimonials.jpeg'
import aspas from '../../assets/images/aspas.svg'
import Button from '../Button';

import { RowContainer } from './styles';

const Testimonials: React.FC = () => {
  return (
    <Container>
      <RowContainer>
        <div className="col-5">
            <img src={paulo} alt="" srcSet={paulo} loading="lazy"/>
        </div>
        <div className="col-5">
            <img src={aspas} alt="" srcSet={aspas} loading="lazy"/>
            <div className="text">
              <h2>A hospedagem me ajudou a pagar por uma nova cozinha e outras melhorias.</h2>
              <p>Paulo hospeda em São Paulo para ganhar um dinheiro extra</p>
              <Button label="Descubra como ser um anfitrião" type="button" background="#45A3AB"/>
            </div>
        </div>
      </RowContainer>
    </Container>
  );
}

export default Testimonials;