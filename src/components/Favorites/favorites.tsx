import React from "react";
import MovieContainer from "../movie/Container/movieContainer";
import FavoritesStyles from "./favoritesStyles";
import FavroritesProps from "../../models/favorites";

const Favorites: React.FC<FavroritesProps> = ({
  favorites,
  toggleFavorite,
}) => {
  const localFavorites = JSON.parse(localStorage.getItem("favorites"));

  const CurrentFavorites: React.FC = () => {
    return localFavorites.length === 0 ? (
      <div className="favoritesContainer">
        <p>Ainda não há nenhum favorito :(</p>
      </div>
    ) : (
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
    );
  };

  return (
    <FavoritesStyles>
      <p>Favoritos</p>
      <CurrentFavorites />
    </FavoritesStyles>
  );
};

export default Favorites;
