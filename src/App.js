import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';

function App() {

  const nome = 'Jorge Lemes'

  return (
    <>
    <div className="App">
      <h1>Testando CSS</h1>
      <Frase />
      <Frase />
      <SayMyName nome="Matheus" />
      <SayMyName nome="Jorge" />
      <SayMyName nome={nome} />
      <Pessoa 
      nome="Jorge" 
      idade="25" 
      profissoa="Programador" />
    <List />
    </div>
    </>
  );
}

export default App;
