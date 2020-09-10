import React, { PropsWithChildren, ReactNode } from 'react';



import { ContainerDefault } from './styles';

const Container = (props :PropsWithChildren<ReactNode>) => {
  return(
      <ContainerDefault>
          {props.children}
      </ContainerDefault>
  );
}

export default Container;