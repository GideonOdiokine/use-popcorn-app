import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Search from "./components/Search";
import NumResult from "./components/NumResult";
import MovieList from "./components/MovieList";
import Box from "./components/Box";
import WatchedSummary from "./components/WatchedSummary";
import WatchedList from "./components/WatchedList";
import SelectedMovie from "./components/SelectedMovie";
import Loader from "./components/Loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ErrorMessage from "./components/ErrorMessage";
import { useMovies } from "./hooks/useMovies";
import { useLocalStorageState } from './hooks/useLocalStorageState';

export default function App() {
  const [query, setQuery] = useState("");
  const [selectedID, setSelectedID] = useState(null);
  const [watched, setWatched] = useLocalStorageState([], 'watched')
  const { error, isLoading, movies } = useMovies(query);

  const handleSelectMovie = (id) => {
    setSelectedID((selectedId) => (selectedId === id ? null : id));
  };

  function handleCloseSelectMovie() {
    setSelectedID(null);
  }

  const handleAddWatched = (movie) => {
    setWatched((watched) => [...watched, movie]);
    // localStorage.setItem("watched", JSON.stringify([...watched, movie]));
  };

  const handleRemoveWatched = (id) => {
    setWatched((watched) => watched?.filter((watch) => watch.imdbID !== id));
    toast.success("Deleted successfully");
  };


  return (
    <>
      <ToastContainer />
      <Navbar>
        <Search query={query} setQuery={setQuery} />
        <NumResult movies={movies} />
      </Navbar>
      <Main>
        <Box>
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <MovieList movies={movies} onSelectMovie={handleSelectMovie} />
          )}
          {error && <ErrorMessage message={error} />}
          {!query && !error && (
            <ErrorMessage message={"Please search for any movie"} />
          )}
        </Box>
        <Box>
          {selectedID ? (
            <SelectedMovie
              selectedID={selectedID}
              onCloseMovie={handleCloseSelectMovie}
              onAddWatchedMovie={handleAddWatched}
              watched={watched}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedList
                watched={watched}
                onDeleteWatchedMovie={handleRemoveWatched}
              />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}
