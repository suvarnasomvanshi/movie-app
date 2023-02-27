import Style from "./Movie.module.css"
import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import {AiFillHeart} from "react-icons/ai"


const Movie=()=>{
    const [movie,setMovie]=useState();
    const [favMovie,setFavMovie]=useState(JSON.parse(localStorage.getItem("favouriteMovie"))|| []);
    const {id} =useParams();

    useEffect(()=>{
        getData()
       // window.scrollTo(0,0)
    },[])

         //by clicking on single movie on ui, it fetch data using that specific id inside getdata
        const getData=()=>{
         fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
          .then(res => res.json())
          .then(data => setMovie(data));}
     
          console.log(movie)
         
         //by clicking add to favourite movie option, add that movie data inside localstorage,by event handlefav
      const handleFav=()=>{
            setFavMovie([...favMovie,movie]);
          }
      localStorage.setItem("favouriteMovie",JSON.stringify(favMovie))

    return(
        <>

        <div className={Style.moviediv}>
          <h1>movie information</h1>

            <span className={Style.favourite}>
               <button  onClick={()=>handleFav(id)}> 
               ADD TO FAVOURITE:<AiFillHeart style={{color:"red",fontSize:"20px"}}/>
               </button>
            </span>
              
          <div>
            <div className={Style.moviename}>{movie?movie.original_tittle :""}</div> 
            <div className={Style.movieruntime}>movie time :{movie? movie.runtime +"min":""}</div>
            <div >
                <img className={Style.movieposter} src={`https://image.tmdb.org/t/p/original${movie? movie.poster_path:""}`}/>
            </div>
          </div>
      </div>
           
        </>
    )
}
export default Movie;