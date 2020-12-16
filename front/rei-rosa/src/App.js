import React from 'react';

import GlobalStyle from './styles/global';
import Header from './components/Header';
import Body from './components/Body';

function App() {
  return (
    <>
      <Header></Header>
      <Body></Body>
      <GlobalStyle></GlobalStyle>
    </>
  );
}

export default App;
