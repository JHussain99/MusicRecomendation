import "./App.css";
import Player1 from "./NewFetch";
import Searchp from "./amazonapi";
import Loadclient from "./loadclient";

function App() {
  return (
    <div className="App-header">
      <header className="App">
        <Player1></Player1>
        <Searchp></Searchp>
        <p>{/* Edit <code>src/App.js</code> and save to reload. */}</p>
      </header>
    </div>
  );
}

export default App;
