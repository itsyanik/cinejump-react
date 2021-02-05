import React from "react";
import AppStyles from "./appStyles";
import Header from "components/Header";
import MovieList from "components/movie/List";
import Trailers from "components/Trailers";
import Spotlight from "components/Spotlight";

const App = () => {
  return (
    <div className="App">
      <AppStyles />
      <Header />
      <Spotlight />
      <MovieList name="Populares" getFrom="popular" />
      <MovieList name="Em exibição" getFrom="now_playing" />
      <Trailers />
    </div>
  );
};

export default App;
