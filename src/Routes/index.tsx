import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Layouts from '../Layouts';
import Home from '../Pages/Home';
// import { Container } from './styles';

const Routes: React.FC = () => {
  return(
      <BrowserRouter>
            <Switch>
                <Layouts>
                    <Route path="/" exact component={Home}/>
                </Layouts>
            </Switch>
      </BrowserRouter>
  );
}

export default Routes;