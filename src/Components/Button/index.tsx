

import React, {ButtonHTMLAttributes} from "react";
import {Bgcolor , ButtonContainer } from './styles'

interface ButtonProps extends Bgcolor, ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
  }
  
const Button: React.FC<ButtonProps> = ({ label, background, ...props }) => {
    return (
      <ButtonContainer {...props} background={background} >{label}</ButtonContainer>
    )
  }

  export default Button
