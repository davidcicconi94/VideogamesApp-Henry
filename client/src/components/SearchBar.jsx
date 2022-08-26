import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getByName } from "../redux/actions/actions";

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
      </form>
    </div>
  );
};

export default SearchBar;
