import Movie from "./movie";

function Movies(props) {
  const {movies} = props
  // console.log(movies);

  return (
    <>
      {movies.map(movie => (
        <Movie key={movie.imdbID} {...movie}/>
      ))}
    </>
  );
}

export default Movies;