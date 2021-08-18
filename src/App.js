import './App.css';
import FetchRequests from './FetchRequests';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <h1>API Data</h1>
      <h2>Fetch a list from an API and display it</h2>

      <div>
        
        <br />
        <FetchRequests />
      </div>

    </div>
  );
}

export default App;
