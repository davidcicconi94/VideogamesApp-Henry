import "./App.css";
import SearchBar from "./components/SearchBar";
import Videogames from "./components/Videogames";

function App() {
  return (
    <div className="App">
      <h1>Henry Videogames</h1>
      <SearchBar />
      <Videogames />
    </div>
  );
}

export default App;
