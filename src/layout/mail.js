import { React,Component } from "react";
import Movies from "../components/movies";

export default class Main extends Component {
  state = {
    movie: []
  }

  componentDidMount(){
    fetch('http://www.omdbapi.com/?apikey=7553d81d&s=panda')
    .then(response => response.json())
    .then(data => this.setState({movie: data.Search}))

    // .then(() => console.log(this.state.movie))
  }

  render(){
    const{ movie } = this.state
    return (
      <div className="main container">
        {movie.length ?
          <Movies movies={movie}/>
          :<h1>Loading..</h1>
        }
      </div>
    );
  }
}


// key 7553d81d