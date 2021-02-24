import React from "react";
import MovieContainer from "../movie/Container/movieContainer";
import FavoritesStyles from "./favoritesStyles";

const Favorites: React.FC = ({ favorites, toggleFavorite }) => {
  const localFavorites = JSON.parse(localStorage.getItem("favorites"));

  return (
    <FavoritesStyles>
      <p>Favoritos</p>
      <div className="favoritesContainer">
        {localFavorites?.map((favorite, idx) => {
          return (
            <MovieContainer
              movie={favorite}
              key={idx}
              favorites={favorites}
              toggleFavorite={toggleFavorite}
            />
          );
        })}
      </div>
    </FavoritesStyles>
  );
};

export default Favorites;
