import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/navbar/navbar';
import Gerenciamento from './pages/gerenciamentoClientes/cadastro';
import Cadastro from './pages/gerenciamentoClientes/cadastro';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Cadastro/>
      
      </header>
    </div>
  );
}

export default App;
