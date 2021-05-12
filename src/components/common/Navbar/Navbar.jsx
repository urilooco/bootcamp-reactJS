import React from 'react';
import '../../../App.css';
import arkus from '../../../img/1593613798582.jpg';
import App from '../../../App';
import './Navbar.css';

function Navbar(props){
  const classNames = ['Nav-item'];
  if (props.selected) {
    classNames.push('Nav-item-selected');
  }

  if (props.vertical) { 
    classNames.push('Nav-item-vertical');
  }

  return (
    <button
      className={classNames.join(' ')}
      type="button"
      onClick={props.onNav}
    >
      {props.title}
    </button>
  );
}

export default Navbar;