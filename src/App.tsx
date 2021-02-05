import React from "react";
import AppStyles from "./appStyles";
import Header from "components/Header";
import MovieList from "components/movie/List";
import Trailers from "components/Trailers";
import Spotlight from "components/Spotlight";
import Footer from "components/Footer";

const App = () => {
  return (
    <div className="App">
      <AppStyles />
      <Header />
      <Spotlight />
      <MovieList name="Populares" getFrom="popular" />
      <MovieList name="Em exibição" getFrom="now_playing" />
      <Trailers />
      <Footer />
    </div>
  );
};

export default App;
