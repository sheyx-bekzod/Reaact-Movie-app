import Movie from "./movie";

function Movies(props) {
  const {movies = []} = props
  console.log();
  // console.log(movies);

  return (
    <main className="container">
      {movies ? 
        movies.map(movie => (
            <Movie key={movie.imdbID} {...movie}/>
        ))
      : <h1>Nothing is Found</h1>}
    </main>
  );
}

export default Movies;