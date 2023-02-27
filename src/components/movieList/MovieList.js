import React, { useEffect, useState } from "react";
import Style from "./MovieList.module.css";
import Card from "../Card/Card";
import { useParams } from "react-router-dom";

function MovieList() {
  const [movieList, setMovieList] = useState([]);
  const { type } = useParams();

  //useEffect(()=>{
  //    getData()
  //},[]);

  useEffect(() => {
    getData();
  }, [type]);
  
  //useParam search that type on url 
  //get value of "type" from useParams which access value from url & fetch data for that type .
  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setMovieList(data.results));
  };

  return (
    <>
      <div className={Style.MovieList}>
        <h2 className="listtitle">{(type ? type : "POPULAR").toUpperCase()}</h2>
        <div className={Style.listcard}>
          {movieList.map((movie) => (
            <Card movie={movie} />
          ))}
        </div>
      </div>
    </>
  );
}
export default MovieList;
