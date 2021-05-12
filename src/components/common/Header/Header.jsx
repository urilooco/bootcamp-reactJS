import React from 'react';
import Navbar from '../Navbar/Navbar';
import { viewsEnum } from '../../utils/constants';
import logo from '../../../img/1593613798582.jpg';
import './Header.css';

const items = [
  { title: 'Home', id: viewsEnum.MYINFORMATION },
  { title: 'Exercises', id: viewsEnum.EXCERCISES },
];

const Header = (props) => {
  const handleNavigation = (newView) => () => {
    if (newView !== props.view) {
      props.onNav(newView);
    }
  };

  return (
    <header className="Header">
      <div className="Header-logo" style={{
          display: 'flex'
      }}>
        <img src={logo} alt="" />
        <p className="Boot">Boot Camp</p>
      </div>

      {items.map(item => (
        <Navbar
          key={item.title}
          selected={props.view === item.id}
          onNav={handleNavigation(item.id)}
          title={item.title}
        />
      ))}
    </header>
  );
};

export default Header;