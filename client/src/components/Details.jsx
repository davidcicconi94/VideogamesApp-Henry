import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getVgDetail } from "../redux/actions/actions";
import Loading from "./Loading";
import "../styles/Details.style.css";

const Details = () => {
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  let videogame = useSelector((state) => state.videogame);
  const navigate = useNavigate();

  var regex = /(<([^>]+)>)/gi;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVgDetail(id)).then(() => setLoading(false));
  }, [dispatch, id]);

  const handleClick = () => {
    navigate(-1);
  };

  if (loading) {
    <Loading />;
  }

  return (
    <div className="details-all">
      <h2> {videogame.name} </h2>
      <p className="released">📅 {videogame.released} </p>
      <img
        className="img-details"
        src={videogame.image}
        alt={videogame.name}
        height="400px"
        width="700px"
      />
      <p className="description">
        {videogame.description?.replace(regex, "").replace("&#39", "")}
      </p>
      <h3>🎮 {videogame.platforms?.join(" - ")} </h3>
      <button className="button-2" onClick={handleClick}>
        Back
      </button>
    </div>
  );
};

export default Details;
