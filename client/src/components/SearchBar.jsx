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
  };

  return (
    <div>
      <form onSubmit={(e) => onSubmit(e)}>
        <input
          type="text"
          placeholder="Videogame..."
          onChange={(e) => onChange(e)}
          value={input}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
