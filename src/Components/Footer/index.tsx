import React,{ useState, useEffect } from 'react';

import { FooterContainer } from './styles';

const Footer = () => {
    const [year , setYear] = useState<number>(2019);

    const date = new Date();

    useEffect(() => {
        setYear(date.getFullYear());
    }, [date])
  return(
      <FooterContainer>
        &copy; {year} - all Rights Reserved
      </FooterContainer>
  );
}

export default Footer;