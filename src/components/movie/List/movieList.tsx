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

      if (getFrom === "popular") {
        setResult(response.data.results.slice(3));
        return;
      }

      setResult(response.data.results);
    };

    getList();
  }, [getFrom]);

  return (
    <ListStyles>
      <p>{name}</p>
      <div>
        {result &&
          result.map((movie, i) => {
            return <MovieContainer movie={movie} key={i} />;
          })}
      </div>
    </ListStyles>
  );
};

export default MovieList;
