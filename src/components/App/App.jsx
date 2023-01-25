import { useState } from 'react';

import Header from '../Header/Header';
import { Main } from '../Main/Main';
import { Footer } from '../Footer/Footer';
import { PopupMenu } from '../PopupMenu/PopupMenu';

import './App.css';

const App = () => {
  const [menu, isMenu] = useState(false);

  const onCloseMenu = () => {
    isMenu(false);
  };

  const onOpenMenu = () => {
    isMenu(true);
  };

  return (
    <div className="app">
      <Header />
      <Main />
      <Footer />

      <button onClick={onOpenMenu} className='button-menu'></button>
      <PopupMenu isActive={menu} onCloseMenu={onCloseMenu}/>
    </div>
  );
};

export default App;
