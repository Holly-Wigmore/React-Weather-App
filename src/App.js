import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <h1>Weather Forecast</h1>
      <Weather />
      <p>
        Find this project on
        <a
          href="https://github.com/Holly-Wigmore/React-Weather-App"
          rel="noreferrer"
          target="_blank"
        >
          {" "}
          GitHub
        </a>
      </p>
    </div>
  );
}

export default App;
