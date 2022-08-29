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
    videogame = [];
  };

  if (loading) {
    <Loading />;
  }

  return (
    <div>
      <h3> {videogame.name} </h3>
      <p>📅 {videogame.released} </p>
      <img src={videogame.image} alt="" height="400px" />
      <p> {videogame.description?.replace(regex, "").replace("&#39", "")} </p>
      <h4>🎮 {videogame.platforms?.join(" - ")} </h4>
      <button className="button-2" onClick={handleClick}>
        Back
      </button>
    </div>
  );
};

export default Details;
