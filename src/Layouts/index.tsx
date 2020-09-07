import React from 'react';
import Header from '../Components/Header'
import Footer from '../Components/Footer'
// import { Container } from './styles';

const Layouts: React.FC = ({children}) => {
  return(
      <>
        <Header/>
            {children}
        <Footer />
      </>
  );
}

export default Layouts;