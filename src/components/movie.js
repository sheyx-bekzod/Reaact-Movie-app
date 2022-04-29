function Movie(props) {
  const{Poster,Title,Type,Year} = props

  return (
          <div className="card">
              <img className="card-img-top" src={Poster} alt="Card image" />
              <div className="card-body">
                <h4 className="card-title">{Title}</h4>
                <p className="card-text">Type:{Type}</p>
                <p className="card-text">Year:{Year}</p>
              </div>
            </div>        
  );
}

export default Movie;