import React, {Component} from "react";
import TitleFilter from './TitleFilter'
import RatingFilter from './RatingFilter'
import MovieList from './MovieList'

// const inception = {
//   id: 'inception',
//   title: 'Inceptionnnn',
//   rating: 5,
//   image: 'https://i.ytimg.com/vi/E1iqGiX0lSg/movieposter.jpg',
//   year: 2010}

// const shawshank = {
//     id: 'shawshank',
//     title: 'Shawshank Redeption',
//     year: 1994,
//     rating: 5
// }

// const whatever = {id: 'whatever', title: 'Whatever', rating: 2, year: 1900}


const MovieApp = () => (
  <div className="movie-app">
    <header className="movie-app-header">
      <TitleFilter />
      <RatingFilter />
    </header>
    <main className="movie-app-main">
        <MovieList />
    </main>
  </div>
)

export default MovieApp;
