import Movie from "./movie";

interface ContainerProps {
  movie: Movie;
  favorites: any[];
  toggleFavorite: Function;
}

export default ContainerProps;
