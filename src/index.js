import React from "react";
import { render } from "react-dom";
import {Provider} from 'react-redux'
import MovieApp from "./MovieApp";
import movieAppStore from './store'
import './MovieApp.css'
const App = () => (
  <Provider store={movieAppStore}>
    <MovieApp />
  </Provider>
);

render(<App />, document.getElementById("root"));