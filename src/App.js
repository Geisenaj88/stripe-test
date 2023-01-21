import React from 'react';
import './App.scss';

import Header from 'components/header/header.component';
import Hero from 'components/hero/hero.component';
import MainSection from 'components/main-section/main-section.component'

function App() {
  return (
    <div className="App">
      <Header />
        <Hero />
      <MainSection />
    </div>
  );
}

export default App;
