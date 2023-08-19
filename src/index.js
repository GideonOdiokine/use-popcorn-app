import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import StarRating from "./components/StarRating";
import App from './App';
import './index.css';
// import App from './App';

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <>
//       <StarRating
//         maxRating={10}
//         onSetRating={(movieRating) => setMovieRating(movieRating)}
//         color="blue"
//       />
//       <p>This movie was rated {movieRating}</p>
//     </>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
