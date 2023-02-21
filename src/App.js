import React from "react"
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home"
import MovieList from "./components/movieList/MovieList";


function App() {
  return (
    <div className="App">
      
       <Router>
        <Header/>
       <Routes>
        <Route index path="/" element={<Home/>}></Route>
        <Route path="movie/:id" element={<h1>movie list</h1>}></Route>
        <Route path="movie/:type" element={<MovieList/>}></Route>
        <Route path="/*" element={<h1>errore page</h1>}></Route>
        </Routes>
        </Router>
    </div>
  );
}

export default App;
