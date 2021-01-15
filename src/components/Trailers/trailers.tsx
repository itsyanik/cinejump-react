import React from "react";
import StyledTrailers from "./styledTrailers";
import { useTrailers } from "../../hooks/useTrailers";

const Trailers: React.FC = () => {
  const trailers = useTrailers();

  return (
    <StyledTrailers>
      <div className="bgContainer">
        <div className="trailersContainer">
          <p>Trailers</p>
          <div className="trailersWrapper">
            {trailers?.map((trailer) => {
              return (
                <div className="trailer" key={trailer.id}>
                  <iframe
                    src={`https://www.youtube.com/embed/${trailer.key}`}
                    title={trailer.title}
                    frameBorder="0"
                  />
                  <span>{trailer.title}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </StyledTrailers>
  );
};

export default Trailers;
