import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getByName, getvideogames } from "../redux/actions/actions";
import { Link } from "react-router-dom";
import "../styles/NavBar.style.css";
import Loading from "./Loading";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  if (loading) {
    <Loading />;
  }
  const onChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(getByName(input)).then(() => setLoading(true));
    setInput("");
  };

  const handleRefresh = (e) => {
    e.preventDefault();
    dispatch(getvideogames());
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="right-buttons">
          <input
            type="text"
            placeholder="Videogame..."
            onChange={onChange}
            value={input}
            name="name"
            autoComplete="off"
          />
          <button type="submit" className="button">
            Search
          </button>
          <div className="span">
            <span>
              <Link to="/create">
                <button className="button">Create Game</button>
              </Link>
            </span>
            <span>
              <button onClick={handleRefresh} className="button">
                Refresh
              </button>
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
