import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getByName } from "../redux/actions/actions";
import { Link, useNavigate } from "react-router-dom";
import Form from "./Form";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const onChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(getByName(input));
    setInput("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Videogame..."
          onChange={onChange}
          value={input}
        />
        <button type="submit">Search</button>
        <span>
          <Link to="/create">
            <button>Create Game</button>
          </Link>
        </span>
      </form>
    </div>
  );
};

export default SearchBar;
