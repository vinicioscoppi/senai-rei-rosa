import React from 'react';

import GlobalStyle from './styles/global';
import Header from './components/Header';
import Body from './components/Body';
import { ModalProvider } from 'styled-react-modal'

function App() {
  return (
    <>
      <ModalProvider>
        <Header></Header>
        <Body></Body>
      </ModalProvider>
      <GlobalStyle></GlobalStyle>
    </>
  );
}

export default App;
