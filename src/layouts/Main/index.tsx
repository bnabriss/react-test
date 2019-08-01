import React, { Children, useState } from 'react';
import './Main.scss';
import AsideLogo from '../../components/AsideLogo/';
import AsideLink from '../../components/AsideLink/';
import AsideBackgrounds from '../../components/AsideBackgrounds/';

import usericon from '../../assets/ee_icon.png';
import menuicon from '../../assets/menu.svg';

const Main: React.FC = ({children}) => {
  const [asideOpened, setAsideOpened] = useState(false);

  return (
    <div className="container">
      <button className="aside-toggle" onClick={(e) => setAsideOpened(!asideOpened)}> 
        <img src={menuicon} alt="menuicon"/>
      </button>
      <aside className="aside">
        <AsideLogo/>
        <div className={'aside__links '+(asideOpened ? 'opened' : '')}>
          <AsideLink active={true}>DASHBOARD</AsideLink>
          <AsideLink>LINKS</AsideLink>
          <AsideLink>EMBEDS</AsideLink>
          <AsideLink>MANAGE PIXEL</AsideLink>
          <AsideLink>PERMISSIONS</AsideLink>
          <AsideLink>AUDIENCES</AsideLink>
          <AsideLink>ADVERTISE</AsideLink>
        </div>
        <AsideBackgrounds/>
      </aside>
      {children}
      <div className="unsername">
        <img src={usericon} alt="usericon"/>
        <span>Bassam Nabriss</span>
      </div>
    </div>
  );
}

export default Main;
