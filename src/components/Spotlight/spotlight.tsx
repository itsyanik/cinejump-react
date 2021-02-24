import React, { useEffect, useState } from "react";
import SpotlightStyles from "./spotlightStyles";
import tmdb from "services/api/tmdb";

const POSTER_URL = "https://image.tmdb.org/t/p/original";

const Spotlight: React.FC = () => {
  const [result, setResult] = useState(null);

  useEffect(() => {
    const getList = async () => {
      const response = await tmdb.get(`/movie/popular`);

      const topThree = [];

      topThree.push(response.data.results[0]);
      topThree.push(response.data.results[1]);
      topThree.push(response.data.results[2]);

      setResult(topThree);
    };

    getList();
  }, []);

  return (
    <SpotlightStyles>
      <div className="backgroundContainer">
        {result &&
          result.map((pop, idx) => {
            return (
              <div
                key={idx}
                className="movie"
                id={idx === 0 ? "spotlight" : ""}
              >
                <img
                  src={`${POSTER_URL}${pop.backdrop_path}`}
                  alt={pop.title}
                />
                <div className="about">
                  <span className="title">{pop.title}</span>
                  {idx === 0 && <p className="overview">{pop.overview}</p>}
                </div>
              </div>
            );
          })}
      </div>
    </SpotlightStyles>
  );
};

export default Spotlight;
