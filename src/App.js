import './App.css';

function App() {
  const apiURL = "https://dev.mulwi.cloud/api/tag";

  return (
    <div className="App">
      <h1>API Data</h1>
      <h2>Fetch a list from an API and display it</h2>

      <div>
        <button className="fetch-button">Get Data</button>
        <br />
      </div>
      
    </div>
  );
}

export default App;
