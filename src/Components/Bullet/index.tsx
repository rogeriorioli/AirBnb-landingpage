import React , {ReactNode} from 'react';

import {BulletBg,  BulletContainer } from './styles';

interface BulletProps extends BulletBg {
    value : string | ReactNode,
}

const Bullet: React.FC<BulletProps> = ({value, bgcolor }) => {
  return(
    <BulletContainer bgcolor={bgcolor}>
        {value}
    </BulletContainer>
  );
}

export default Bullet;