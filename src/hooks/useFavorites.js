import { useEffect, useState } from "react";

const useFavorites = (key, initialValue = []) => {
  const [storedFavorites, setStoredFavorites] = useState(initialValue);

  useEffect(() => {
    try {
      const items = window.localStorage.getItem(key);

      setStoredFavorites(items ? JSON.parse(items) : initialValue);
    } catch (e) {
      console.error(e);
    }
  }, []);

  const setValue = (value) => {
    const favoritesIds = storedFavorites.map((favorite) => favorite.id);
    const isFavorite = favoritesIds.includes(value.id);
    let newStore;

    if (isFavorite) {
      const filter = storedFavorites.filter((movie) => movie.id !== value.id);
      newStore = filter;
    } else {
      newStore = [...storedFavorites, value];
    }

    setStoredFavorites(newStore);

    window.localStorage.setItem(key, JSON.stringify(newStore));
  };

  return [storedFavorites, setValue];
};

export default useFavorites;
