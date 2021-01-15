import { useState, useEffect } from "react";
import tmdb from "services/api/tmdb";

export const useTrailers = () => {
  const [trailers, setTraiers] = useState([]);

  useEffect(() => {
    const getPopular = async () => {
      const response = await tmdb.get(`/movie/popular`);
      const results = response.data.results;

      const trailerData = results?.map(async (result) => {
        const { id, title } = result;
        const response = await tmdb.get(`/movie/${id}/videos`);

        if (response?.data?.results[0]) {
          const key = response.data.results[0].key;

          return { key, title, id };
        }
      });

      const trailerResults = await Promise.all(trailerData);

      setTraiers(trailerResults.filter(Boolean));
    };

    getPopular();
  }, []);

  return trailers;
};
