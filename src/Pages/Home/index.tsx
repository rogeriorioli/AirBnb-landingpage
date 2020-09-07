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


const Home: React.FC<HTMLElement> = () => {
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
        <Testimonials />
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
      </>
  );
}

export default Home;