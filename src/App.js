import logo from "./logo.svg";
import "./App.css";
import Question2 from "./NewFetch";

function App() {
  return (
    <div className="App-header">
      <header className="App">
        <Question2></Question2>
        {/* <img src="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHw%3D&w=1000&q=80"></img> */}

        <p>{/* Edit <code>src/App.js</code> and save to reload. */}</p>
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
