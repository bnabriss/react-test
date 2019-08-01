import React from 'react';
import './style.scss';

const Tag: React.FC<{ icon ?: any, active ?: boolean }> = ({children, icon, active}) => {
  return (
    <label className={'tag '+ (active ? 'active' : '')}>
      <span>{children}</span>
      <a href="#" className="tag__icon">
        {icon}
      </a>
    </label>
  );
}

export default Tag;
 