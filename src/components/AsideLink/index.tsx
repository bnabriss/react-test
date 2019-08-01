import React, { Children } from 'react';
import './style.scss';

const AsideLink: React.FC<{ active?: boolean }> = ({children, active = false}) => {
  return (
    <a href="#" className={'aside__link ' + (active ? 'active' : '')}>{children}</a>
  );
}

export default AsideLink;
