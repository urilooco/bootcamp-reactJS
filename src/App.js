import React, { useState } from 'react';
import './App.css';
import { viewsEnum } from './components/utils/constants';
import MyInformation from './components/common/MyInformation/MyInformation';
import Header from './components/common/Header/Header.jsx';
import Excercises from './components/common/Exercises/Exercises';

function App() {
  const [view, setView] = useState(viewsEnum.MYINFORMATION);

  const handleNavigation = (newView) => {
    setView(newView);
  }

  let content = null;

  switch (view) {
    case viewsEnum.EXCERCISES:
      content = <Excercises />;
      break;
    case viewsEnum.MYINFORMATION:
    default:
      content = <MyInformation />;
  }

  return (
    <div>
      <Header view={view} onNav={handleNavigation} />

      {content}
    </div>
  );
}

export default App;
