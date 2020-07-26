import React from 'react';

import GlobalStyle from './styles/global';
import Header from './components/Header';
import Sync from './components/Sync';
import Room from './components/Room';
import Start from './components/Start';

function App() {
  return (
    <>
      <Header></Header>
      <Sync></Sync>
      <Room></Room>
      <Start></Start>
      <GlobalStyle></GlobalStyle>
    </>
  );
}

export default App;
