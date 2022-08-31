import React from "react";
import gif from "../images/loading_goku.gif";

const Loading = () => {
  return (
    <div>
      <img
        src={gif}
        style={{
          padding: 20,
          marginTop: 10,
        }}
        alt=""
        width="200px"
      />
      <h2
        style={{
          color: "white",
          fontWeight: "bold",
          marginLeft: 30,
          fontFamily: "monospace",
          padding: 20,
        }}
      >
        Loading...
      </h2>
    </div>
  );
};

export default Loading;
