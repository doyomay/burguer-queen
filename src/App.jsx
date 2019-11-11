import React from 'react';
import { Provider } from 'react-redux';
import 'normalize.css';
import './App.css';

import store from './store';
import Menu from './components/Menu';
import Wrapper from './components/Wrapper';

function App() {
  return (
    <Provider store={store}>
      <main className="App">
        <Menu />
        <Wrapper>
          <h1>Estamos en el wrapper</h1>
        </Wrapper>
      </main>
    </Provider>

  );
}

export default App;
