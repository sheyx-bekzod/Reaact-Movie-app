import { React,Component } from "react";
import Loading from "../components/loading";
import Movies from "../components/movies";
import Search from "../components/search";

export default class Main extends Component {
  state = {
    movie: [],
    loading: true
  }


  componentDidMount(){
    fetch('http://www.omdbapi.com/?apikey=7553d81d&s=panda')
    .then(response => response.json())
    .then(data => this.setState({movie: data.Search,loading: false}))

    // .then(() => console.log(this.state.movie))
  }

  searchMovie = (str,type) => {
    fetch(`http://www.omdbapi.com/?apikey=7553d81d&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
    .then(response => response.json())
    .then(data => this.setState({movie: data.Search,loading: false}))
    .then(data => console.log(data))
  }

  render(){
    const{ movie } = this.state
    return (
      <div className="wrapper">
        <Search className="container" searchMovies={this.searchMovie}/>
        {this.state.loading ?
        <div className="main container">
           <Loading />
        </div>
         :
          <Movies movies={movie}/>
         }
      </div>
     
    );
  }
}


// key 7553d81d