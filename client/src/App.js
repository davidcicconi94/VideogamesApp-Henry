import "./App.css";
import Order from "./components/Order";
import SearchBar from "./components/SearchBar";
import Videogames from "./components/Videogames";

function App() {
  return (
    <div className="App">
      <h1>Henry Videogames</h1>
      <SearchBar />
      <Order />
      <Videogames />
    </div>
  );
}

export default App;
