import React, { Children } from 'react';
import './style.scss';
import back1 from '../../assets/Group 562.svg';
import back3 from '../../assets/Group 563.svg';
import back2 from '../../assets/Group 564.svg';

const AsideLogo: React.FC = ({ children }) => {
  return (
    <div className="aside__backgrounds">
      <div>
        <span>CHANGE BACKGROUND</span>
      </div>
      <div>
        <a href="#">
          <img src={back1} alt="Wood 1" />
        </a>
        <a href="#">
          <img src={back2} alt="Wood 2" />
        </a>
        <a href="#">
          <img src={back3} alt="Wood 3" />
        </a>
      </div>
    </div>
  );
}

export default AsideLogo;
