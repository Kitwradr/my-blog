import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        
        <p className='coming-soon'>Coming soon <span class="loader__dot">.</span><span class="loader__dot">.</span><span class="loader__dot">.</span></p>
        <p className='coming-soon'> Suhas Hebbur Eshwar</p>
      </header>
    </div>
  );
}

export default App;
