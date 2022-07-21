import { Box, Button, CardMedia, Rating } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase";
const BASE_IMAGE_URL = "http://image.tmdb.org/t/p/original";

const MovieCard = ({ movie }) => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const onDetail = (plan) => {
    navigate(`/detail/${plan}`);
  };
  return (
    <Card id={movie.id} sx={{ display: "flex", width: 400, margin: 5 }}>
      <CardMedia
        component="img"
        sx={{ width: 150, height: 225 }}
        image={`${BASE_IMAGE_URL}${movie.poster_path}`}
        alt="Movie poster"
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h6">
            {movie.title}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {new Date(movie.release_date).getFullYear()}
          </Typography>
          <Box
            sx={{
              width: 200,
              display: "flex",
              alignItems: "center",
            }}
          >
            <Rating
              name="read-only"
              precision={0.1}
              value={movie.vote_average / 2}
              max={5}
              readOnly
            />
            <Box sx={{ ml: 2 }}>{movie.vote_average.toFixed(1)}</Box>
          </Box>
        </CardContent>{" "}
        <Typography component="div" variant="h6">
          {user ? (
            <Button
              sx={{border:"none", outline: 0, width: "250px" }}
              variant="contained"
              onClick={() => onDetail(movie.id)}
            >
              Detail
            </Button>
          ) : (
            <NavLink to={"/register"}></NavLink>
          )}
        </Typography>
      </Box>
    </Card>
  );
};

export default MovieCard;
