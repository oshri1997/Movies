import React, { useState, useEffect } from "react";
import "./app.css";
import MovieList from "./components/MovieList";
import axios from "axios";
import Heading from "./components/Heading";
import SearchBox from "./components/SearchBox";
import AddFavorite from "./components/AddFavorite";
import RemoveFavourites from "./components/RemoveFavourites";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      const { data } = await axios.get(
        `https://www.omdbapi.com/?s=${searchValue}&apikey=d976f86c`
      );
      setMovies(data.Search);
    };
    fetchdata();
  }, [searchValue]);

  useEffect(() => {
    const movieFavorite = JSON.parse(localStorage.getItem("react-movie-app"));
    if (movieFavorite) {
      setFavorites(movieFavorite);
    }
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("react-movie-app", JSON.stringify(items));
  };
  const addToFavorite = (movie) => {
    const newFavoriteList = [...favorites, movie];
    setFavorites(newFavoriteList);
    saveToLocalStorage(newFavoriteList);
  };
  const removefromFavorite = (movie) => {
    const newFavoriteList = favorites.filter(
      (favorite) => favorite.imdbID !== movie.imdbID
    );
    setFavorites(newFavoriteList);
    saveToLocalStorage(newFavoriteList);
  };
  return (
    <div className="container-fluid movieLine">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <Heading title="Movies" />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className="row">
        <MovieList
          handleFavoriteClick={addToFavorite}
          favoriteComponent={AddFavorite}
          movies={movies}
        />
      </div>
      <div className="row d-flex align-items-center mt-4 mb-4">
        <Heading title="Favorite List" />
      </div>
      <div className="row">
        <MovieList
          handleFavoriteClick={removefromFavorite}
          favoriteComponent={RemoveFavourites}
          movies={favorites}
        />
      </div>
    </div>
  );
}

export default App;
