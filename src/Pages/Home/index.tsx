import React from 'react';
import Hero from '../../Components/Hero/'
import herobg from '../../assets/images/hero3.jpeg';
import roomaid from '../../assets/images/roomaid.jpeg';
import Card from '../../Components/Card';
import Container from '../../Components/Container';
import Line from '../../Components/Line'
import Divider from '../../Components/Divider';
import Testimonials from '../../Components/Testimonials';
import FormValue from '../../Components/FormValue';
import Title from '../../Components/Title';

import { whydata , stepdata } from './data'
import Bullet from '../../Components/Bullet';

import paulo from '../../assets/images/testimonials.jpeg'

import linda from '../../assets/images/testimonials2.jpeg'

const Home = () => {
  return(
      <>
        <Hero background={herobg} element={<FormValue/>} />

        <Container>
          {whydata.map(text => (
            <Card  key={text.id} 
               title={text.title}
               line={<Line />}
               content={text.content}
               >
              </Card>
          ))}
        </Container>
        <Container>
          <Divider/>
        </Container>
        <Testimonials
            title="A hospedagem me ajudou a pagar por uma nova cozinha e outras melhorias."
            content="Paulo hospeda em São Paulo para ganhar um dinheiro extra"
            image={paulo}
        />
        <Container>
          <Divider/>
        </Container>
        <Container>
           <Title text="Hospedagem em 3 passos" />
        </Container>
        <Container>
          {stepdata.map(step => (
             <Card  key={step.id} 
             steps = {<Bullet value={step.id} bgcolor="#45A3AB" />}
             title={step.title}
             content={step.content}
             >
            </Card>
          ))}
        </Container> 
          <Hero background={roomaid}  />
          <Container>
          <Divider/>
        </Container>
        <Testimonials
            direction="row-reverse"
            title="A hospedagem me ajudou a colocar uma internet mais rapida e colocar um pequeno Co-working para meus hospedes."
            content="Linda hospeda em cidade do Mexico e adora receber programadores"
            image={linda}
        />
        <Container>
          <Divider/>
        </Container>
          <Container>
           <Title text="Conheça o Airbnb" />
        </Container>  
        <Container>
             <Card 
            title="O que é o Airbnb?"
             content="O Airbnb conecta pessoas com lugares para ficar e coisas para fazer ao redor do mundo. A comunidade é impulsionada pelos anfitriões, que fornecem aos seus hóspedes a oportunidade única de viajar como um morador local."
             >
            </Card>
            <Card 
            title="O que significa hospedar?" 
             content="Você pode ganhar dinheiro compartilhando seu quarto ou casa com viajantes do mundo inteiro. Quando e como você interage com seus hóspedes é uma decisão sua."             >
            </Card>
        </Container>
      </>
  );
}

export default Home;