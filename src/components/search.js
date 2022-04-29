import { type } from "@testing-library/user-event/dist/type";
import {React, Component} from "react";

class Search extends Component {
    state = {
        search: "panda",
        type:"all"
    }

    handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            this.props.searchMovies(this.state.search,this.state.type)
        }
    }

    handleFilter = (e) => {
        this.setState(() => ({type: e.target.dataset.type}),() => {
            this.props.searchMovies(this.state.search,this.state.type)
        })
    }

    render() {
        const {search} = this.state

        return (
            <div className="row container">
                <div className="col s12">
                    <div className="input-field container">
                        <input
                            id="email_inline"
                            type="text"
                            placeholder="Search..."
                            className="validate"
                            value={search}
                            onChange={(e) => this.setState({search: e.target.value})}
                            onKeyDown={this.handleKeyDown}
                        />
                        <button className="btn" onClick={() => this.props.searchMovies(this.state.search,this.state.type)}>Search
                        </button>
                    </div>
                </div>
                <div className="filter_movies">
                    <label className="width-gap">
                        <input type="radio" name="all" data-type="all" onChange={this.handleFilter} checked={this.state.type == "all"}/>
                        <span>All</span>
                    </label>
                    <label className="width-gap">
                        <input type="radio" name="movie" data-type="movie" onChange={this.handleFilter} checked={this.state.type == "movie"}/>
                        <span>Movie</span>
                    </label >
                    <label className="width-gap">
                        <input type="radio" name="series" data-type="series" onChange={this.handleFilter} checked={this.state.type == "series"}/>
                        <span>series</span>
                    </label>
                </div>
                
            </div>
        );
    }
}

export default Search;