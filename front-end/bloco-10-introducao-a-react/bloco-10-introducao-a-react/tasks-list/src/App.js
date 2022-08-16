import logo from './logo.svg';
import './App.css';

function App() {
  
  const taskslist = ['escovar os dentes', 'tomar café da manhã', 'limpar a caixa de areia', 'colocar ração', 'estudar',]
  
  const listItens = (values) => values.map((value) => <li>{value}</li>);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ul>
          {listItens(taskslist)}
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
