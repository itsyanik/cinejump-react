import React, { useState } from "react";
import MovieStyles from "./movieContainerStyles";
import { ReactComponent as Heart } from "../../../assets/icons/heart.svg";
import Movie from "../../../models/movie";

interface ContainerProps {
  movie: Movie;
}

const MovieContainer: React.FC<ContainerProps> = ({ movie }) => {
  const { original_title, poster_path } = movie;

  const [favorite, setFavorite] = useState(false);
  const basePosterUrl = process.env.REACT_APP_TMDB_IMAGE_URL;

  return (
    <MovieStyles>
      <button onClick={() => setFavorite(!favorite)}>
        <Heart fill={favorite ? "#E83F5B" : "black"} />
      </button>
      <img
        src={`${basePosterUrl}/w780${poster_path}`}
        alt={`Poster for the movie ${original_title}`}
      />
    </MovieStyles>
  );
};

export default MovieContainer;
