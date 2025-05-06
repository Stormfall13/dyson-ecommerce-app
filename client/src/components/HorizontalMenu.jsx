import React from 'react';
import { Link } from 'react-router-dom';

import dataHorMenu from './dataHorMenu';

const HorizontalMenu = () => {

  return (
      <nav className='top__menu'>
          <ul>
            {dataHorMenu.map((horMenuItems) => {
              return (
                <li key={horMenuItems.id}>
                  <Link to={horMenuItems.linkMenu}>{horMenuItems.nameMenu}</Link>
                </li> 
              )
            })}
          </ul>
      </nav>
  )
}

export default HorizontalMenu;
