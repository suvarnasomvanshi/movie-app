import React, { useState, useEffect } from "react";
import Style from "./Home.module.css";
import { Link } from "react-router-dom";
function Home() {
  const [popular, setPopular] = useState([]);
  useEffect(() => {
    //fetch all popular movies stored in popular
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
    )
      .then((res) => res.json())
      .then((data) => setPopular(data.results));
  }, []);
  return (
    <>
      {popular.map((movie) => (
        <Link to={`/movie/${movie.id}`}>
          <div>
            <div>{movie.original_title}</div>
            <span>
              <img
                className={Style.img}
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              />
            </span>
            <div className={Style.overlay}>
              <div className={Style.title}>
                {movie ? movie.original_tittle : ""}
              </div>
              <span className={Style.runtime}>
                {movie ? movie.vote_average : ""}
              </span>
            </div>
            <div className={Style.description}>
              {movie ? movie.overview : ""}
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}
export default Home;
