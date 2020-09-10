import React , {ReactNode} from 'react';

import {BulletBg,  BulletContainer } from './styles';

interface BulletProps extends BulletBg {
    value : string | ReactNode,
}

const Bullet = ({value, bgcolor } :BulletProps) => {
  return(
    <BulletContainer bgcolor={bgcolor}>
        {value}
    </BulletContainer>
  );
}

export default Bullet;