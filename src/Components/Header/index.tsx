import React from 'react';
import { Link } from 'react-router-dom';
import {FaAirbnb} from 'react-icons/fa'
import { HeaderContainer } from './styles';

const Header = () => {
  return(
      <HeaderContainer>  
          <Link to="/">
                <FaAirbnb  size={45} color="#45A3AB"/> 
            </Link>  
        </HeaderContainer>
  );
}

export default Header;