import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         the box of rocks will return.
        </p>
        <a
          className="App-link"
          href="https://theboxofrocks.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Coming Soon . . .  
        </a>
      </header>
    </div>
  );
}

export default App;
