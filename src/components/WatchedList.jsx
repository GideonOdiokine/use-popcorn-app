import React from "react";
import WatchedListItem from "./WatchedListItem";

const WatchedList = ({ watched, onDeleteWatchedMovie }) => {
  return (
    <ul className="list">
      {watched?.map((movie) => (
        <WatchedListItem
          movie={movie}
          key={movie.imdbID}
          onDeleteWatchedMovie={onDeleteWatchedMovie}
        />
      ))}
    </ul>
  );
};

export default WatchedList;
