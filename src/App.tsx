import React from "react";
import AppStyles from "./appStyles";
import MovieList from "components/movie/List";
import Trailers from "components/Trailers";

const App = () => {
  return (
    <div className="App">
      <AppStyles />
      <MovieList name="Populares" getFrom="popular" />
      <MovieList name="Em exibição" getFrom="now_playing" />
      <Trailers />
    </div>
  );
};

export default App;
