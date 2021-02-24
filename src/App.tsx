import React from "react";
import AppStyles from "./appStyles";
import Header from "components/Header";
import MovieList from "components/movie/List";
import Trailers from "components/Trailers";
import Spotlight from "components/Spotlight";
import Footer from "components/Footer";
import Favorites from "./components/Favorites/favorites";
import useFavorites from "./hooks/useFavorites";

const App = () => {
  const [favorites, toggleFavorite] = useFavorites("favorites");

  return (
    <div className="App">
      <AppStyles />
      <Header />
      <Spotlight />
      <MovieList
        name="Populares"
        getFrom="popular"
        favorites={favorites}
        toggleFavorite={toggleFavorite}
      />
      <MovieList
        name="Em exibição"
        getFrom="now_playing"
        favorites={favorites}
        toggleFavorite={toggleFavorite}
      />
      <Trailers />
      <Favorites favorites={favorites} toggleFavorite={toggleFavorite} />
      <Footer />
    </div>
  );
};

export default App;
