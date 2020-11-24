import React from "react";

const MovieList = ({ movies, handleFavoriteClick, favoriteComponent }) => {
  const FavoriteComponent = favoriteComponent;
  return (
    <>
      {movies &&
        movies.map((movie, index) => (
          <div
            key={index}
            className="image-container d-flex justify-content-start m-3"
          >
            <img src={movie.Poster} alt="movie" />
            <div
              onClick={() => handleFavoriteClick(movie)}
              className="overlay d-flex align-items-center justify-content-center"
            >
              <FavoriteComponent />
            </div>
          </div>
        ))}
    </>
  );
};

export default MovieList;
