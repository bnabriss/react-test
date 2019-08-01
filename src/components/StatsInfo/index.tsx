import React, { Children } from 'react';
import green_arrow from '../../assets/green_arrow.svg';
import './style.scss';

const StatsInfo: React.FC<{ icon ?: any, rate ?: number }> = ({children, icon, rate=100}) => {
  return (
    <div className="stats-info">
      {icon}
      <div className="stats-info__text">
        {children}
      </div>
      <div  className="stats-info__rate">
        {rate}% <img src={green_arrow} alt="green_arrow"/>
      </div>
    </div>
  );
}

export default StatsInfo;
 