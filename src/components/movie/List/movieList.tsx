import React, { useEffect, useState } from "react";
import MovieContainer from "../Container";
import List from "../../../models/list";
import ListStyles from "./listStyle";
import tmdb from "services/api/tmdb";

interface IMovieList {
  list: List;
}

const MovieList: React.FC<IMovieList> = ({ name, getFrom }) => {
  const [result, setResult] = useState(null);

  useEffect(() => {
    const getList = async () => {
      const response = await tmdb.get(`/movie/${getFrom}`);

      setResult(response.data.results);
    };

    getList();
  }, [getFrom]);

  return (
    <ListStyles>
      <p>{name}</p>
      {result &&
        result.map((movie, i) => {
          return <MovieContainer movie={movie} key={i} />;
        })}
    </ListStyles>
  );
};

export default MovieList;
