import React from "react";
import AppStyles from "./appStyles";
import MovieList from "components/movie/List";

const App = () => {
  return (
    <div className="App">
      <AppStyles />
      <MovieList name="Populares" getFrom="popular" />
      <MovieList name="Em exibição" getFrom="now_playing" />
    </div>
  );
};

export default App;
