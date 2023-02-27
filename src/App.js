import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import FavouriteMovies from "./pages/FavouriteMovies/FavouriteMovies"
import MovieList from "./components/movieList/MovieList";
import Movie from "./pages/Movie/Movie";

function App() {
  return (
    <div className="App">
      <Router>
        <Header className="appheader"/>
        <Routes>
          <Route index path="/" element={<Home />}></Route>
          <Route path="/favouritemovies" element={<FavouriteMovies/>}></Route>
          <Route path="movie/:id" element={<Movie />}></Route>
          {/*type= popular,upcoming,top-rated*/}
          <Route path="movies/:type" element={<MovieList />}></Route>
          <Route path="/*" element={<h1>errore page</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
