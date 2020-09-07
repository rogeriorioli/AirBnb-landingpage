  
import {createGlobalStyle} from 'styled-components'




const GlobalStyles = createGlobalStyle`

  *{
      margin : 0;
      padding : 0;
      box-sizing : border-box;
      font-family: 'PT Sans', sans-serif;
      font-size : 60%;
}

:root {
    --primary-color : #45A3AB;
    --secondary-color : #706F6F;
    --black : #000; 
    --white : #fff;
}

`
export default GlobalStyles