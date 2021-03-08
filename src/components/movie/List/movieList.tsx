import React, { useEffect, useState } from "react";
import MovieContainer from "../Container";
import List from "../../../models/list";
import ListStyles from "./listStyle";
import tmdb from "services/api/tmdb";

const MovieList: React.FC<List> = ({
  name,
  getFrom,
  favorites,
  toggleFavorite,
}) => {
  const [result, setResult] = useState(null);

  useEffect(() => {
    if (name !== "favorites") {
      const getList = async () => {
        const response = await tmdb.get(`/movie/${getFrom}`);

        if (getFrom === "popular") {
          setResult(response.data.results.slice(3));
          return;
        }

        setResult(response.data.results);
      };

      getList();
    }
  }, [getFrom, name]);

  return (
    <ListStyles>
      <div className="listContainer">
        <p>{name}</p>
        <div className="movieContainer">
          {result &&
            result.map((movie, i) => {
              return (
                <MovieContainer
                  movie={movie}
                  key={i}
                  favorites={favorites}
                  toggleFavorite={toggleFavorite}
                />
              );
            })}
        </div>
      </div>
    </ListStyles>
  );
};

export default MovieList;
