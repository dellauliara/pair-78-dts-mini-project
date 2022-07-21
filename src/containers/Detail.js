import React from "react";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import tmdb from "../apis/tmdb";
import MovieDetail from "../components/MovieDetail";

const Detail = () => {
  const params = useParams();
  const [movies, setMovies] = useState([]);
  const fetchData = async () => {
    const response = await tmdb.get("movie/" + params?.plan);
    setMovies([response.data]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Box sx={{ mt: 10 }}>
        {movies.map((movie) => (
          <MovieDetail movie={movie}></MovieDetail>
        ))}
      </Box>
    </>
  );
};

export default Detail;
