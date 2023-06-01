import React from "react";
import "./Hero.css";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Hero = ({ movies }) => {
  return (
    <div className="movie-carousel-container">
      <Carousel>
        {movies &&
          movies.map((movie) => {
            return (
              <Paper key={movie.imdbId}>
                <div className="movie-card-container">
                  {/* Movie card is the background image */}
                  <div
                    className="movie-card"
                    style={{
                      "--img": `url(${movie.backdrops[1]})`,
                    }}
                  >
                    <div className="movie-detail">
                      {/* Movie poster is the small poster image */}
                      <div className="movie-poster">
                        <img src={movie.poster} alt="poster" />
                      </div>

                      {/* Movie title */}
                      <div className="movie-title">
                        <h4>{movie.title}</h4>
                      </div>

                      {/* Movie play button */}
                      <div className="movie-buttons-container">
                        <Link
                          to={`/Trailer/${movie.trailerLink.substring(
                            movie.trailerLink.length - 11
                          )}`}
                        >
                          <div className="play-button-icon-container">
                            <FontAwesomeIcon
                              className="play-button-icon"
                              icon={faCirclePlay}
                            />
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Paper>
            );
          })}
      </Carousel>
    </div>
  );
};

export default Hero;
