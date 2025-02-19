import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router";

const Overview = () => {
  const id = useParams().id;

  const [overview, setOverview] = useState();

  const getOverview = async () => {
    const res = await axios.get(
      `http://www.omdbapi.com/?apikey=c9807183&i=${id}`
    );
  };

  return <div></div>;
};

export default Overview;
