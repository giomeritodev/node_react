import React, { useState } from 'react';
import Header from './Header';

function App() {
  //Estado (retorna um array onde [valor atual, manipulador])
  const [counter, setState] = useState(0);

  function increment(){
    setState(counter + 1);
  }

  return (
    <div>
      <Header>Contador: {counter}</Header>
      <button onClick={increment}>Incrementar</button>
    </div>
  );
}

export default App;