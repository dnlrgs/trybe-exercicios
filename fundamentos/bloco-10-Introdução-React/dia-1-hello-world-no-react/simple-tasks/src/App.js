import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tasks = ['Comida dos Gatos', 'Tomar café', 'Escovar os Dentes', 'Estudar']

function App() {
  return (
    <div>
      <ul>{tasks.map(task => Task(task))}</ul>
    </div>
  );
}

export default App;
