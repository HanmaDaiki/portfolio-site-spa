import React from 'react';
import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import Maininformation from './components/MainInformation/MainInformation';
import Skills from './components/Skills/Skills';

function App() {
  const profileInfo = {
    firtsname: 'Denis',
    secondname: 'Novik',
    town: 'Minsk',
    age: '24',
    profession: 'UX | UI designer'
  }

  return (
    <div className="App">
      <Header />
      <Maininformation 
        firstname={profileInfo.firtsname}
        secondname={profileInfo.secondname}
        town={profileInfo.town}
        age={profileInfo.age}
        profession={profileInfo.profession}
      />
      <About 
        firstname={profileInfo.firtsname}
        town={profileInfo.town}
        profession={profileInfo.profession}
      />
      <Skills />
    </div>
  );
};

export default App;
